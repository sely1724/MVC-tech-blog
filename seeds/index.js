const sequelize = require("../config/connection");
const seedBlogPosts = require("./blogPosts");
const seedComments = require("./comments");
const seedUsers = require("./users");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedBlogPosts();
  await seedComments();

  process.exit(0);
};

seedDatabase();
