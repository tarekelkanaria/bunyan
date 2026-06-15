const express = require("express");
// Router
const router = express.Router();
// Require Controller
const createUser = require("../controllers/userController");
// Init Method Request
router.post("/", createUser);
// Export
module.exports = router;
