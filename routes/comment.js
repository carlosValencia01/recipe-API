const { Router } = require("express");

const { postComment, getCommentByRecipe } = require("../controllers/comment");

const router = Router();

router.get("/:id", getCommentByRecipe);

router.post("/", postComment);

module.exports = router;
