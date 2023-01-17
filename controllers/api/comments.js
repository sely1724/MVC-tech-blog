const express = require("express");
const router = express.Router();
const withAuth = require("../../utils/withAuth");
const { BlogPosts, Users, Comments } = require("../../models");

router.post("/", withAuth, async (req, res) => {
  try {
    const dbComment = await Comments.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(200).json(dbComment);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
