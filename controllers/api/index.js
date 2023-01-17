//login route
const router = require("express").Router();

const userRoutes = require("./users");
const commentRoutes = require("./comments");
const dashboardRoutes = require("./dashboard");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
