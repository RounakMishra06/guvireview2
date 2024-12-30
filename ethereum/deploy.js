const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  //"journey awesome else couch program autumn sense random office lazy bitter alpha",
  // remember to change this to your own phrase!
  //"https://ropsten.infura.io/v3/e86e98a8613749838a1cc160ec5cbb72"
  // remember to change this to your own endpoint!
   "memory swear quit grain sketch armor jewel delay uncover lottery battle dragon",
   "HTTP://127.0.0.1:7545"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object})
    .send({from: accounts[0]}).
    catch(error => {
      // Will not execute
      console.log('caught :', error);
    });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();