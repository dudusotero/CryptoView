const axios = require("axios");

const getAbiFromEtherscan = async (contractAddress) => {
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const response = await axios.get(url);
  if (response.data.status === "1") {
    return JSON.parse(response.data.result);
  } else {
    throw new Error("Error fetching ABI from Etherscan");
  }
};

module.exports = { getAbiFromEtherscan };
