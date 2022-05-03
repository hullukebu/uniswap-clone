require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9S27HplhL899h35zA7tJRZrBRQgt1cc5',
      accounts: [
        'c7acf229306071e68ecec1d2bb7108d9fd272441e75463fe9226ecc488679851',
      ],
    },
  },
}
