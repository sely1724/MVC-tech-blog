//login route
const router = require("express").Router();

const userRoutes = require("./users");
//const blogRoutes = require("./blogPostRoutes");
// dont need yet.  likely will bring back when I add comments in.
const dashboardRoutes = require("./dashboard");

router.use("/users", userRoutes);
//router.use("/blog", blogRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
