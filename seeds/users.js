[
  {
    id: 1,
    username: "sylvia",
    password: "password",
  },
  {
    id: 2,
    username: "seaurchin",
    password: "password2",
  },
];

const { Users } = require("../models/Users"); //add in require models

const usersSeed = [
  {
    id: 1,
    username: "sylviarocks",
    password: "password",
  },
  {
    id: 2,
    username: "seaurchin",
    password: "password2",
  },
];

const seedGallery = () => Users.bulkCreate(usersSeed);

module.exports = seedGallery;
