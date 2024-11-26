const BigNumber = require("bignumber.js");
const { getAbiFromEtherscan } = require("../utils/abi.js");
const { Web3 } = require("web3");

const getTokenBalanceFromWallet = async (req, res) => {
  const { contractAddress, walletAddress } = req.params;

  if (!contractAddress) {
    return res.status(400).json({ error: "Please provide a contract address" });
  }

  if (!walletAddress) {
    return res.status(400).json({ error: "Please provide a wallet address" });
  }

  try {
    const abi = await getAbiFromEtherscan(contractAddress);
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.INFURA_URL)
    );

    const contract = new web3.eth.Contract(abi, contractAddress);
    const balance = await contract.methods.balanceOf(walletAddress).call();

    const balanceInToken = new BigNumber(balance);

    res.status(200).json(balanceInToken.toFixed());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTokenBalanceFromWallet };
