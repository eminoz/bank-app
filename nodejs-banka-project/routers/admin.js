const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const adminController = require("../controllers/admin/admin");
const User = require("../modele/user");

router.post(
  "/savenewcustomer",

  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject("this email already exist");
        }
      });
    })
    .normalizeEmail(),
  body(
    "password",
    "please enter a password withonly numeric and text least 5 caracter "
  )
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim(),

  adminController.saveNewCustomer
);
module.exports = router;
