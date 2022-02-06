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
router.get("/category/:id", getRecipesByCategory);

router.put("/update/:id", updateRecipe);

router.post("/", postRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;
