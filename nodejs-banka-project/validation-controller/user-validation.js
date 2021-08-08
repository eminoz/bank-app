const { body } = require("express-validator");

exports.userSignupValidation = (req, res, next) => {
  body("email")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject("E-Mail address already exists!");
        }
      });
    })
    .normalizeEmail(),
    next();
};
