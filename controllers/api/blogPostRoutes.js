// we need a route for adding a comment. POST?

const express = require("express");
const router = express.Router();
const { Users, BlogPosts } = require("../../models");

// get individual blog post - INCLUDES ALL COMMENTS.
// /:id

// option to add comments.
// post /:id

// get dashboard of blog posts - ALL INDIVIDUAL POSTS
// /dashboard

// get dashboard - unique post - includes comments
// /dashboard/:id

// create new post
// /dashboard/new-post

// click thru on dashboard?

module.exports = router;
