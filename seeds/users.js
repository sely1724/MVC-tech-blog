const { Users } = require("../models"); //add in require models

const usersSeed = [
  {
    username: "sylviarocks",
    password: "password",
  },
  {
    username: "seaurchin",
    password: "password2",
  },
];

const seedUsers = () => Users.bulkCreate(usersSeed);

module.exports = seedUsers;
