const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      default: "akbank",
    },
    accountNumber: {
      type: Number,
      require: true,
    },

    moneyInAccount: {
      type: Number,
      require: true,
    },
    cheapMoney: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", accountSchema);
