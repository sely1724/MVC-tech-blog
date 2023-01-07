const router = require("express").Router();
const blogPostRoutes = require("./api/blogPostRoutes");

router.use("/", blogPostRoutes);

module.exports = router;
