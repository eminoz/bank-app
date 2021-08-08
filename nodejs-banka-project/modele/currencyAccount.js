const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currencySchema = new Schema(
  {
    kind: {
      type: String,
      required: true,
      enum: ["USD", "EUR", "DOVIZ"],
    },
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true,
    },
    moneyInAccount: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Currency", currencySchema);
