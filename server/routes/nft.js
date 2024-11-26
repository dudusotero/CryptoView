const express = require("express");
const {
  persistNFTMetadataFromSource,
} = require("../controllers/nftController.js");

const router = express.Router();

router.get("/:contractAddress/:tokenId", persistNFTMetadataFromSource);

module.exports = router;
