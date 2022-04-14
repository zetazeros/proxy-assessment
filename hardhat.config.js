require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');

module.exports = {
  solidity: '0.7.3',
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://localhost:8545'
    },
    hardhat: {}
  },
  gasReporter: {
    enabled: false,
    showTimeSpent: true,
  }
};
