const express = require("express");
const router = express.Router();
const userController = require("../controllers/user/user");

router.get("/useraccount/:uderid",userController.getUserAccount)
router.post("/drawCach", userController.drawCach);
router.post("/sendMoney", userController.sendMoneyToACustomer);
// router.post("/exchangemoney", userController.exchangeToCurrency);
module.exports = router;
