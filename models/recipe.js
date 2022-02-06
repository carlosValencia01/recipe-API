const { Schema, model } = require("mongoose");

const RecipeSchema = Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  process: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
  rate: { type: Double, required: false },
  author_id: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = model("Recipe", RecipeSchema);
