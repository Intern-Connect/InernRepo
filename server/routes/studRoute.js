const express = require("express");
const router = express.Router();
const studController = require("../controllers/studController");
const authController = require("../controllers/authController");

router.patch("/update", authController.protect, studController.updateStud);

module.exports = router;
