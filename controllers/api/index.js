//login route
const router = require("express").Router();

const userRoutes = require("./users");
const blogRoutes = require("./blogPostRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/users", userRoutes);
router.use("/blog", blogRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
