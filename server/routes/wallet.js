const express = require("express");
const {
  getTokenBalanceFromWallet,
} = require("../controllers/walletController.js");

const router = express.Router();

router.get("/:contractAddress/:walletAddress", getTokenBalanceFromWallet);

module.exports = router;
