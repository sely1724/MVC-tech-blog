//login route
const router = require("express").Router();

const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogPostRoutes");

router.use("/users", userRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
