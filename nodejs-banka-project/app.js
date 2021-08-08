const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const cors = require("cors");
const routers = require("./routers/api");
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routers);

mongoose
  .connect(
    "mongodb+srv://eminoz:Eminemin.07@cluster0.e0j1g.mongodb.net/ownproject?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
