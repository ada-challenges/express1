// routes/users.js

const express = require("express");
const AuthController = require("../src/controllers/AuthController");
const router = express.Router();

const authController = new AuthController()
 
router.post("/login", authController.login);

router.get("/logout", authController.logout);  

router.post("/register", authController.register);

module.exports = router;