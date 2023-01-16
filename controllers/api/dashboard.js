// we need a route for adding a comment. POST?

const express = require("express");
const router = express.Router();
const { BlogPosts } = require("../../models");

// get dashboard - unique post - includes comments
// /dashboard/:id

// create new post
// /dashboard/new-post

// click thru on dashboard?

// we need a route for adding a comment. POST?

router.post("/", async (req, res) => {
  try {
    const dbBlogPost = await BlogPosts.create({
      title: req.body.title,
      notes: req.body.notes,
    });
    console.log(dbBlogPost);
    res.status(200).json(dbBlogPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// option to add comments.
// post /:id

// get dashboard - unique post - includes comments
// /dashboard/:id

// create new post
// /dashboard/new-post

// click thru on dashboard?
