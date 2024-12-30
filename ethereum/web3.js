import Web3 from "web3";

let web3;

// first one is for next as next runs in server and cant find window
// second is for browser and metamask
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
  console.log("web 3 From metamask");
} else {
  // We are on the server *OR* the user is not running metamask
  console.log("web 3 From infura");
  const provider = new Web3.providers.HttpProvider(
    "http://localhost:7545"
    //"https://ropsten.infura.io/v3/e86e98a8613749838a1cc160ec5cbb72"
  );
  web3 = new Web3(provider);
}

export default web3;
