const mongoose = require("mongoose");
const connectDatabase = mongoose.connect(
  "mongodb+srv://eminoz:Eminemin.07@cluster0.e0j1g.mongodb.net/ownproject?retryWrites=true&w=majority"
);
export default connectDatabase;
