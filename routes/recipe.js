const { Router } = require("express");

const { postRecipe } = require("../controllers/recipe");

const router = Router();

// router.get("/", getUser);

// router.put("/:id", putUser);

router.post("/", postRecipe);

// router.delete("/", deleteUser);

module.exports = router;
