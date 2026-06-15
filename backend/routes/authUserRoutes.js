const express = require("express");
// Router
const router = express.Router();
// Require Controller
const loginController = require("../controllers/authUserController");
// Init Method Request
router.post("/login", loginController);
// Export
module.exports = router;
