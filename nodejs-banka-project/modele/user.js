const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    telno: {
      type: Number,
      required: true,
    },
    mothersSurname: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "user",
    },
    customerAccount: {
      ref: "Account",
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
