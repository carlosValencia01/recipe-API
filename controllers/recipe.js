const { response } = require("express");
const Recipe = require("../models/recipe");

const postRecipe = async (req, res) => {
  const {
    title,
    ingredients,
    process,
    image,
    description,
    rate,
    author_id,
    category,
  } = req.body;
  const recipe = new Recipe({
    title,
    ingredients,
    process,
    image,
    description,
    rate,
    author_id,
    category,
  });
  await recipe.save();
  res.json({
    msg: "post",
    recipe,
  });
};

module.exports = {
  postRecipe,
};
