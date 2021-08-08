const User = require("../../modele/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Account = require("../../modele/customerAccount");
const { validationResult } = require("express-validator");

exports.saveNewCustomer = async (req, res, next) => {
  const name = req.body.name;
  const branch = req.body.branch;
  const email = req.body.email;
  const password = req.body.password;
  const telno = req.body.telno;
  const mothersSurname = req.body.mothersSurname;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array()[0].msg });
  }
  try {
    let randomAccountNumber = 0;

    let loop;
    while (!loop) {
      randomAccountNumber = Math.floor(Math.random() * 100000000);
      if (Account.findOne({ accountNumber: randomAccountNumber }) === null) {
        loop = false;
        return randomAccountNumber;
      }
      loop = true;
    }
    
    const newAccountNumber = await new Account({
      branch: branch,
      accountNumber: randomAccountNumber,
      moneyInAccount: 0,
    });
    const savedAccount = await newAccountNumber.save();
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new User({
      name: name,
      email: email,
      password: hashedPassword,
      telno: telno,
      mothersSurname: mothersSurname,
      customerAccount: savedAccount,
    });

    const savedUser = await newUser.save();

    return res
      .status(200)
      .json({ message: "user saved successfuly", userId: savedUser._id });
  } catch (err) {
    console.log(err);
  }
};
