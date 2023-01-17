const express = require("express");
const router = express.Router();
const withAuth = require("../../utils/withAuth");
const { BlogPosts, Users } = require("../../models");

router.post("/post", withAuth, async (req, res) => {
  try {
    const dbBlogPost = await BlogPosts.create({
      title: req.body.title,
      notes: req.body.notes,
      user_id: req.session.userId,
    });
    res.status(200).json(dbBlogPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get single personal post (shows delete/update button)
// router.get("/post/:id", async (req, res) => {
//   try {
//     const dbSinglePost = await BlogPosts.findByPk(req.params.id, {
//       where: {
//         id: req.params.id,
//       },
//       include: [
//         {
//           model: Users,
//           attributes: ["id", "username"],
//         },
//       ], //eventually include COMMENTS
//     });
//     console.log(dbSinglePost);
//     const singlePost = dbSinglePost.get({ plain: true });
//     //     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render("personal-post", {
//       blog: singlePost,
//       loggedIn: req.session.loggedIn,
//       //       // loggedIn: req.session.loggedIn,
//       //       // pass thru comments too?
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const updatePost = await BlogPosts.update(req.body, {
//       where: {
//         id: req.params.id,
//       },

//       //how to finish update?????
//     });
//     res.status(200).json(updatePost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// delete route by specific id.
router.delete("/:id", async (req, res) => {
  try {
    const postData = await BlogPosts.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
