import axios from 'axios';
import { toast } from 'react-hot-toast';
import { PITCHSHOW_ABI, ERC20_ABI, APP_ABI } from '../utils/config'
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

export const APP_URL = `https://api-pitch.vercel.app/`;
export const API_URL = `${APP_URL}api/`;

const api = axios.create({
    baseURL: API_URL
})

export const getData = async (endPoint) => {
    try {
        const { data } = await api.get(endPoint)
        return data
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`)
    }
}

export const postData = async (endPoint, formData) => {
    try {
        const { data } = await api.post(endPoint, formData)
        return data
    } catch (error) {
        toast.error(`${error?.response?.data?.message}`)
        return error
    }
}

export const fetchData = async () => {
    let web3 = new Web3(
        new Web3.providers.HttpProvider(
            process.env.REACT_APP_RPC_URI
        ));
    const pitchShow = new web3.eth.Contract(
        PITCHSHOW_ABI,
        process.env.REACT_APP_PITCHSHOW_ADDRESS
    );
    return await pitchShow.methods.getProjects().call();
}


export const getBaseCoinAddress = async () => {
    let web3 = new Web3(
        new Web3.providers.HttpProvider(
            process.env.REACT_APP_RPC_URI
        ));
    const pitchShow = new web3.eth.Contract(
        PITCHSHOW_ABI,
        process.env.REACT_APP_PITCHSHOW_ADDRESS
    );
    return await pitchShow.methods.getBaseCoinAddress().call();
}

export const getDecimals = (erc20Address) => {
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            process.env.REACT_APP_RPC_URI
        ));

    const erc20 = new web3.eth.Contract(
        ERC20_ABI,
        erc20Address
    );

    return erc20.methods.decimals().call();
}


export const HandleApprove = async (_address, _amount, _from) => {
    const provider = await detectEthereumProvider();
    let web3 = new Web3(provider);

    const erc20 = new web3.eth.Contract(
        ERC20_ABI,
        _address
    );
    try {
        const alowanceAmount = await erc20.methods.allowance(_from, process.env.REACT_APP_PITCHSHOW_ADDRESS).call();
        const decimals = await getDecimals(_address);
        const amountInEth = String(_amount * (10 ** decimals));
        if (Number(alowanceAmount) < Number(amountInEth)) {
            const approve = await erc20.methods.approve(
                process.env.REACT_APP_PITCHSHOW_ADDRESS,
                amountInEth
            ).send({ from: _from });
        }
        return true;
    } catch (error) {
        return false;
    }
}


export const _invest = async (_id, _amount, from) => {
    try {
        const provider = await detectEthereumProvider();
        let web3 = new Web3(provider);
    
        const app = new web3.eth.Contract(
            APP_ABI,
            process.env.REACT_APP_APP_ADDRESS,
            {from}
        );
        const usdtContractAddress = process.env.REACT_APP_APP_USDT_ADDRESS;
        const decimals = await getDecimals(usdtContractAddress);
        const amount = String(_amount * (10 ** decimals));
        return await app.methods.invest(
            _id,
            amount
        ).send({
            gasLimit: 300000
        });
    }
    catch (e) {
        throw e;
    }
}

export const _isWhitelisted = async (_id) => {
    let web3 = new Web3(
        new Web3.providers.HttpProvider(
            process.env.REACT_APP_RPC_URI
        ));
    const pitchShow = new web3.eth.Contract(
        PITCHSHOW_ABI,
        process.env.REACT_APP_PITCHSHOW_ADDRESS
    );
    return await pitchShow.methods.isWhitelisted(_id).call();
}