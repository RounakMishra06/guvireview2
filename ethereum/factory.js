import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//ABI and address of deployed contract form environment
//factory is added just to directly use deployed contracts check page 14  of docs

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x4ED3d521E90645771f1862DE44Fe0EEB5680abDA"
  //"0x05585c30d7c7BD54358eAfd1042Dd319922f7033"
);
// console.log(instance);
export default instance;
