import Web3 from "web3";

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
      const chainId = await provider.request({ 
        method: 'eth_chainId' 
      });
      const BTCId = '0x61';
      if (chainId === BTCId) {
        const web3 = new Web3(window.ethereum);
        try {
            const accounts = await web3.eth.getAccounts();
            balanceInfo.amount = parseInt(await web3.eth.getBalance(accounts[0]));
        } catch (error) {
            balanceInfo.status = false;
        }
        balanceInfo.status = true;
      }else{
        balanceInfo.status = false;
      }
    }else{
        balanceInfo.status = false;
    }
    return balanceInfo;
}