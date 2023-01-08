const { BlogPosts } = require("../models"); //add in require models

const blogPostSeed = [
  {
    user_id: 1,
    title: "Who is new to handlebars?",
    notes:
      "Learned a little last week.  Struggling.  Could someone explain built in helpers??",
  },
];

const seedBlogPosts = () => BlogPosts.bulkCreate(blogPostSeed);

module.exports = seedBlogPosts;
