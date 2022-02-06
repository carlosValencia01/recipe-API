const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
  author: { type: String, required: true },
  comment: { type: String, required: true },
  recipe_id: { type: String, required: true },
});

module.exports = model("Comment", CommentSchema);
