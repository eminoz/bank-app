const Account = require("../../modele/customerAccount");
const User = require("../../modele/user");

exports.drawCach = async (req, res, next) => {
  const userId = req.body.userId;
  const money = req.body.money;

  try {
    const user = await Account.findOne({ _id: userId });
    if (user.moneyInAccount < money) {
      res.json({ message: "yeterli para yok" });
    }

    if (user.moneyInAccount >= money) {
      const updatedMoney = user.moneyInAccount - money;
      const account = await Account.findOneAndUpdate(
        { _id: userId },
        { moneyInAccount: updatedMoney }
      );
      const savedUser = await account.save();
      return res.status(200).json({
        message: "para çekildi",
        moneyInAccount: savedUser.moneyInAccount,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.sendMoneyToACustomer = (req, res, next) => {
  const userId = req.body.userId;
  const money = req.body.money;
  const customerId = req.body.customerId;

  Account.findOne({ _id: userId }).then((user) => {
    if (user.moneyInAccount < money) {
      res.json({ message: "yetersiz bakiye" });
    }
    if (user.moneyInAccount >= money) {
      const updatedMoney = user.moneyInAccount - money;
      Account.findOneAndUpdate(
        { _id: userId },
        { moneyInAccount: updatedMoney }
      )
        .then((result) => {
          result.save();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  Account.findOne({ _id: customerId }).then((result) => {
    const updatedMoney = result.moneyInAccount + money;
    Account.findOneAndUpdate(
      { _id: customerId },
      { moneyInAccount: updatedMoney }
    ).then((result) => {
      result.save();
      res.json({ message: "para yollandı" });
    });
  });
};

exports.getUserAccount = async (req, res, next) => {
  const userId = req.params.uderid;
 
  const user = await User.findOne({ _id: userId });
  console.log(user);
  res.json({ user: user });
};
