const router = require("express").Router();
// require in models
const { BlogPosts, Comments, Users } = require("../models");

// GET all blog posts for homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await BlogPosts.findAll({
      include: [
        {
          model: BlogPosts,
          attributes: ["title"], // include post title and date created.
          // TO DO : ADD DATE ^^^ date maybe already created by database? Or do I manually add it?
        },
      ],
    });

    const newBlogDataArray = blogData.map((blog) => blog.get({ plain: true }));
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("homepage", {
      newBlogDataArray,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog post
router.get("/blog/:id", async (req, res) => {
  try {
    const dbBlogData = await BlogPosts.findByPk(req.params.id, {
      include: [
        {
          model: BlogPosts,
          attributes: [
            "id",
            "user_id",
            "title",
            "notes",
            //TO DO: probably need to add post date
          ],
        },
      ],
    });

    const singleBlogPost = dbBlogData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'blog' template
    res.render("blog", { singleBlogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET DASHBOARD - have to login to have dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const dbDashboard = await BlogPosts.findByPk(req.params.id);

    //where BlogPost.user_id = some kind of session.id??? ???

    const dashboard = dbDashboard.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("dashboard", { dashboard, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
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
