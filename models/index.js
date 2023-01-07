const BlogPosts = require("./BlogPosts");
const Comments = require("./Comments");
const Users = require("./Users");

Users.hasMany(BlogPosts, {
  foreignKey: "user_id",
});

BlogPosts.belongsTo(Users, {
  foreignKey: "user_id",
});

BlogPosts.hasMany(Comments, {
  foreignKey: "blog_post_id",
});

Comments.belongsTo(BlogPosts, {
  foreignKey: "blog_post_id",
});

Users.hasMany(Comments, {
  foreignKey: "user_id",
});

Comments.belongsTo(Users, {
  foreignKey: "user_id",
});

module.exports = { Users, BlogPosts, Comments };
