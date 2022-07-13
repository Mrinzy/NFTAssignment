const HospitalToken = artifacts.require("HospitalToken");

module.exports = function (deployer) {
  deployer.deploy(HospitalToken);
};
