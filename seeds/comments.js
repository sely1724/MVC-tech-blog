const { Comments } = require("../models/Comments"); //add in require models

const commentSeed = [
  {
    id: 1,
    blog_post_id: 1,
    user_id: 1,
    comment:
      "Whew! I just used for the first time today. Had to read a bunch of documentation, but feel like I understand.  Helpers are the proposed way to add custom logic to templates. You can write any helper and use it in a sub-expression.",
    date: "December 22, 2022 11:00:00",
  },
  {
    id: 2,
    blog_post_id: 1,
    user_id: 2,
    comment: "Learning right now!",
    date: "January 1, 2023 11:00:00",
  },
];

const seedGallery = () => Comments.bulkCreate(commentSeed);

module.exports = seedGallery;
