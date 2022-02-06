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

const getAllRecipes = async (req, res = response) => {
  const recipes = await Recipe.find({});
  res.json({ recipes });
};

const getRecipesByAuthor = async (req, res = response) => {
  const { id } = req.params;

  const recipes = await Recipe.find({ author_id: id });
  res.json({ recipes });
};

const getRecipesByCategory = async (req, res = response) => {
  const { category } = req.params;

  const recipes = await Recipe.find({ category });
  res.json({ recipes });
};

const deleteRecipe = async (req, res = response) => {
  const { id } = req.params;

  const recipe = await Recipe.deleteOne({ _id: id });
  res.json({ status: "deleted" });
};

const updateRecipe = async (req, res) => {
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

  const { id } = req.params;
  await Recipe.updateOne(
    { _id: id },
    {
      $set: {
        title,
        ingredients,
        process,
        image,
        description,
        rate,
        author_id,
        category,
      },
    }
  );
  res.json({
    msg: "updated",
  });
};

module.exports = {
  postRecipe,
  getAllRecipes,
  getRecipesByAuthor,
  getRecipesByCategory,
  deleteRecipe,
  updateRecipe,
};
