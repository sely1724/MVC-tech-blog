const express = require("express");
const router = express.Router();
// require in models
const withAuth = require("../utils/withAuth");
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
    console.log(blogDisplay);
    res.render("homepage", {
      blogs: blogDisplay,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET single blog post for homepage -- login check required.
router.get("/blog/:id", async (req, res) => {
  try {
    // todo: add in login check helper???
    const dbSinglePost = await BlogPosts.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: ["id", "blog_post_id", "user_id", "comment"],
          include: {
            model: Users,
            attributes: ["username"],
          },
        },
        {
          model: Users,
          attributes: ["id", "username"],
        },
      ],
    });
    const singlePost = dbSinglePost.get({ plain: true });
    console.log(singlePost);
    //     // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("single-post", {
      blog: singlePost,
      loggedIn: req.session.loggedIn,
      //       // loggedIn: req.session.loggedIn,
      //       // pass thru comments too?
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET DASHBOARD - have to login to have dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dbUserData = await Users.findOne({
      where: {
        id: req.session.userId,
      },
      include: [
        {
          model: BlogPosts,
          attributes: ["id", "title", "notes"],
        },
      ],
    });

    const myUser = dbUserData.get({ plain: true });
    console.log(myUser);
    res.render("dashboard", {
      myUser,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET DASHBOARD - have to login to have dashboard
router.get("/dashboard/myblog/:id", async (req, res) => {
  try {
    const userData = await BlogPosts.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ["id", "username"],
        },
        {
          model: Comments,
          attributes: ["id", "blog_post_id", "user_id", "comment"],
          include: {
            model: Users,
            attributes: ["username"],
          },
        },
      ],
    });

    const myPosts = userData.get({ plain: true });
    console.log(myPosts);
    res.render("personal-post", {
      blog: myPosts,
      loggedIn: req.session.loggedIn,
    });
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

module.exports = router;
