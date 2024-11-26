const { Web3 } = require("web3");
const NFTShema = require("../models/nftModel.js");
const axios = require("axios");
const { getAbiFromEtherscan } = require("../utils/abi.js");

const persistNFTMetadataFromSource = async (req, res) => {
  const { contractAddress, tokenId } = req.params;

  if (!contractAddress) {
    return res.status(400).json({ error: "Please provide a contract address" });
  }

  if (!tokenId) {
    return res.status(400).json({ error: "Please provide a token ID" });
  }

  try {
    let nft = await NFTShema.findOne({ contractAddress, tokenId });
    if (!nft) {
      const abi = await getAbiFromEtherscan(contractAddress);

      const web3 = new Web3(
        new Web3.providers.HttpProvider(process.env.INFURA_URL)
      );

      const contract = new web3.eth.Contract(abi, contractAddress);
      const tokenURI = await contract.methods.tokenURI(tokenId).call();

      const response = await axios.get(tokenURI);
      const metadata = response.data;

      nft = new NFTShema({
        contractAddress,
        tokenId,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
      });
      await nft.save();
    }

    res.status(200).json(nft);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { persistNFTMetadataFromSource };
