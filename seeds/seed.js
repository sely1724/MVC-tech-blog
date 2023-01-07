const sequelize = require("../config/connection");
const seedBlogPosts = require("./blogPosts");
const seedComments = require("./comments");
const seedUsers = require("./users");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPosts();

  await seedComments();

  await seedUsers();

  process.exit(0);
};

seedAll();
