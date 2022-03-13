const { Router } = require("express");

const { postFB, getFBData } = require("../controllers/fb");

///    api/fb

const router = Router();

router.post("/", postFB);
router.get("/", getFBData);

module.exports = router;
