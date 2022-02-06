const { Router } = require("express");

const { postComment } = require("../controllers/comment");

const router = Router();

// router.get("/", getUser);

// router.put("/:id", putUser);

router.post("/", postComment);

// router.delete("/", deleteUser);

module.exports = router;
