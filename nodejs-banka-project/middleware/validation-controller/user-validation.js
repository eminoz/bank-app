const User = require("../../modele/user");
const { validationResult } = require("express-validator/check");
exports.newCustomerValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(201).json({ message: "this email already exist" });
    }
    next();
  });
};

