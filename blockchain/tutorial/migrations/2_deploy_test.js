var Election_test = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election_test);
};
