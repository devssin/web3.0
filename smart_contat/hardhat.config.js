//https://eth-ropsten.alchemyapi.io/v2/jNcFNuKSzXnvg26JoKB7-SLLI7BAI2Nq
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten :{
      url: 'https://eth-ropsten.alchemyapi.io/v2/jNcFNuKSzXnvg26JoKB7-SLLI7BAI2Nq',
      accounts: ['531499ec06f0bb2ab974ae5c2e8d21c11472d9ab58ec4c33e8b654f0b4787f11']
    }
  }
}