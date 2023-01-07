const { BlogPosts } = require("../models/BlogPosts"); //add in require models

const blogPostSeed = [
  {
    id: 1,
    user_id: 1,
    title: "Who is new to handlebars?",
    notes:
      "Learned a little last week.  Struggling.  Could someone explain built in helpers??",
    date: "December 12, 2022 10:00:00",
  },
];

const seedGallery = () => BlogPosts.bulkCreate(blogPostSeed);

module.exports = seedGallery;
