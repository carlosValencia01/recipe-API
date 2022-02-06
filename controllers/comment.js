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

const getCommentByRecipe = async (req, res = response) => {
  const { id } = req.params;

  const comments = await Comment.find({ recipe_id: id });
  res.json({ comments });
};

module.exports = {
  postComment,
  getCommentByRecipe,
};
