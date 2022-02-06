const { response } = require("express");
const Comment = require("../models/comment");

const postComment = async (req, res) => {
  const { author, comment, recipe_id } = req.body;
  const comment1 = new Comment({ author, comment, recipe_id });
  await comment1.save();
  res.json({
    msg: "post",
    comment1,
  });
};

module.exports = {
  postComment,
};
