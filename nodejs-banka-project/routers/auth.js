const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/auth");
const { check, body } = require("express-validator");
const User = require("../modele/user");

router.post(
  "/user/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .normalizeEmail(),
    body("password", "please enter a valid password")
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
  ],
  authController.userLogin
);
module.exports = router;
