const express = require("express");

const router = express.Router();
const loginAdmin = require("../controllers/authAdminController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", authMiddleware, loginAdmin);

module.exports = router;
