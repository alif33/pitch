import Web3 from "web3";
import chainInfo from "../utils/chainInfo";

export const NetworkHandler = async() => {
    const round = {};
    const provider = window.ethereum;
    if(provider){
      const chainId = await provider.request({ 
        method: 'eth_chainId' 
      });
      const BTCId = '0x61';
      if (chainId === BTCId) {
        round.status = true;
        round.message = 'You\'re current network';
      }else{
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: BTCId}],
          });
          round.status = true;
          round.message = 'Successfully switched network';

        } catch (switchError) {
          if (switchError.code === 4902) {
            round.status = false;
            round.message = 'This network is not available in your metamask, please add it';
          }
          round.status = false;
          round.message = 'Failed to switch to the network';
        }
      }
    }
    return round;
}

export const selectedNetwork = async() => {
    let isWallet;
    let _chain;
    const provider = window.ethereum;
    if(provider){
      const chainId = await provider.request({ 
        method: 'eth_chainId' 
      });
      const _id = Web3.utils.hexToNumberString(chainId);
      const _info = await chainInfo.find(chain => chain.chainID === parseInt(_id));
      _chain = _info;
      isWallet = true;
    }else{
      isWallet = false;
    }
  return {
    isWallet,
    _chain
  }
}

export const NetworkDetector = async() => {
    let networkStatus;
    const provider = window.ethereum;
    if(provider){
      const chainId = await provider.request({ 
        method: 'eth_chainId' 
      });
      const BTCId = '0x61';
      if (chainId === BTCId) {
        networkStatus = true;
      }else{
        networkStatus = false;
      }
    }else{

    }
    return networkStatus;
}

export const _getBalance = async() => {
    let balanceInfo = {};
    const provider = window.ethereum;
    if(provider){
      balanceInfo.status = true;
      const web3 = new Web3(window.ethereum);
        try {
            const accounts = await web3.eth.getAccounts();
            balanceInfo.amount = parseInt(await web3.eth.getBalance(accounts[0]));
            balanceInfo.status = true;
        } catch (error) {
            console.log(error);
            // balanceInfo.status = false;
            balanceInfo.errMessage = "Please login your Metamask.";
        }
    }else{
        balanceInfo.status = true;
        balanceInfo.amount = 5;
    }
    return balanceInfo;
}