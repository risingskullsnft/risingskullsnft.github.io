import RisingSkullsNFT from "../../abis/RisingSkullsNFT.json";
import YieldToken from "../../abis/YieldToken.json";
import { ethers } from "ethers";
import { simpleRpcProvider } from "@/utils/web3";
import store from "@/store";

export const getRisingSkullsNFTContract = () => {
  const address = process.env.VUE_APP_SKULLS_CONTRACT_ADDRESS;
  const { library } = store.state.web3Modal;
  const signer = library.getSigner();
  return getContract(RisingSkullsNFT.abi, address, signer);
};

export const getRumTokenContract = () => {
  const address = process.env.VUE_APP_YIELDTOKEN_CONTRACT_ADDRESS;
  const { library } = store.state.web3Modal;
  const signer = library.getSigner();
  return getContract(YieldToken.abi, address, signer);
};

const getContract = (abi, address, signer = null) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};
