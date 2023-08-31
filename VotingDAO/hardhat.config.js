require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const INFURA_API_KEY="065e3fecde7f4e429b842d224a570156"
module.exports = {
  solidity: "0.8.4",
  networks: {
  local: {
    url: 'http://localhost:8545'
  },
  sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: ["c6a5ebc6508e6c2f99f738ad40d9922d6c9579d0dbcb3057b423b1fd5bba0ff0"]
    },
  
  goerli: {
    url: 'https://goerli.infura.io/v3/065e3fecde7f4e429b842d224a570156',
    accounts: ['c6a5ebc6508e6c2f99f738ad40d9922d6c9579d0dbcb3057b423b1fd5bba0ff0'],
  },
  ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `e761963cbcfb31097df265db7f7f01ddee45c7206404d4e0a1cfc674a978909d`,
      ],
    }
  }

};