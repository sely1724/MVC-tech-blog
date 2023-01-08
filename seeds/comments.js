const { Comments } = require("../models"); //add in require models

const commentsSeed = [
  {
    blog_post_id: 1,
    user_id: 1,
    comment:
      "Whew! I just used for the first time today. Had to read a bunch of documentation, but feel like I understand.  Helpers are the proposed way to add custom logic to templates. You can write any helper and use it in a sub-expression.",
  },
  {
    blog_post_id: 1,
    user_id: 2,
    comment: "Learning right now!",
  },
];

const seedComments = () => Comments.bulkCreate(commentsSeed);

module.exports = seedComments;
