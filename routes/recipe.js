const { Router } = require("express");

const {
  postRecipe,
  getAllRecipes,
  getRecipesByAuthor,
  getRecipesByCategory,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipe");

const router = Router();

router.get("/", getAllRecipes);
router.get("/author/:id", getRecipesByAuthor);
router.get("/category/:category", getRecipesByCategory);

router.put("/update/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

router.post("/", postRecipe);

module.exports = router;
