const express = require("express");
const router = express.Router();
const { updateStud, upload } = require("../controllers/studController");
const authController = require("../controllers/authController");

router.patch(
	"/update",
	authController.protect,
	upload.fields([
		{ name: "picture", maxCount: 1 },
		{ name: "resume", maxCount: 1 },
	]),
	updateStud
);

module.exports = router;
