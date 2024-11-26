const mongoose = require("mongoose");
const { Schema } = mongoose;

const NFTSchema = new Schema({
  contractAddress: String,
  tokenId: String,
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("NFT", NFTSchema);
