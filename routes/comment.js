const express = require("express");
const comments = require("../models/comments");
const router = express.Router();

//add comment on product

router.post("/addcomment", async (req, res) => {
  const { ProdId, comment, userId } = req.body;
  try {
    const newComment = new comments({
      ProdId,
      comment,
      userId,
    });
    let result = await newComment.save();
    res.send({ result: result, msg: "comment added" });
  } catch (error) {
    console.log(error);
  }
});

// get product comments
router.get("/getcomment/:id", async (req, res) => {
  try {
    let result = await comments
      .find({ ProdId: req.params.id })
      .populate("userId", "name");

    res.send({ comments: result, msg: "product comments" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
