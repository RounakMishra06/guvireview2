const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const inboxPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
 
const input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};
 
 
var campaign = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Campaign.sol'
].Campaign;

var campaignFac = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Campaign.sol'
].CampaignFactory;

fs.ensureDirSync(buildPath);
fs.outputJsonSync(
    path.resolve(buildPath, "Campaign.json"),
    campaign
  );
  fs.outputJsonSync(
    path.resolve(buildPath, "CampaignFactory.json"),
    campaignFac
  );
