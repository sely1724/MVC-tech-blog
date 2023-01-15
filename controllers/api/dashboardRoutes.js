// we need a route for adding a comment. POST?

const express = require("express");
const router = express.Router();
const { Users, BlogPosts } = require("../../models");

// get dashboard - unique post - includes comments
// /dashboard/:id

// create new post
// /dashboard/new-post

// click thru on dashboard?

// we need a route for adding a comment. POST?

router.get("/:id", async (req, res) => {
  try {
    const dbSinglePost = await BlogPosts.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: ["id", "user_id", "comment"],
        },

        //where user id =
      ],
    });

    const singlePost = dbSinglePost.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render("post", { singlePost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// option to add comments.
// post /:id

// get dashboard - unique post - includes comments
// /dashboard/:id

// create new post
// /dashboard/new-post

// click thru on dashboard?

module.exports = router;
