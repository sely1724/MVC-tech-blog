const router = require("express").Router();
const { Users } = require("../../models/");
const bcrypt = require("bcrypt");

//create new user

router.post("/", async (req, res) => {
  Users.create({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    (newUser) => {
      res.json(newUser);
    };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
