const express = require("express");
const router = express.Router();
// require in models
const { BlogPosts, Comments, Users } = require("../models");

// GET all blog posts for homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await BlogPosts.findAll({
      include: [
        {
          model: Users,
          // no need to include comments for homepage.
          attributes: ["username"], // include username
        },
      ],
    });

    const blogDisplay = blogData.map((blog) => blog.get({ plain: true }));
    // Send blogDisplay information to the 'homepage' template
    res.render("homepage", {
      blogs: blogDisplay,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET DASHBOARD - have to login to have dashboard
router.get("/dashboard", async (req, res) => {
  try {
    // don't think this is actually necessary because we can use a helper here??
    // so when we go to render to handlebars, a helper will run 1st to double check user login = true

    // if (!req.session.user) {
    //   return res.redirect("/login");
    // }
    const dbDashboard = await BlogPosts.findAll({
      where: {
        user_id: req.session.users.id, //TODO set up session.user obj in user routes
      },

      include: [
        {
          model: Users,
          attributes: ["username"], // include username, date? tbd
        },
      ],
    });

    const dashboard = dbDashboard.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("dashboard", { dashboard, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login Home Route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

// router.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.render("logout");
// });

module.exports = router;
