import axios from 'axios';
import { toast } from 'react-hot-toast';
import {  PITCHSHOW_ABI, ERC20_ABI } from '../utils/config'
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


export const _getBaseCoinAddress = async() =>{
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


export const HandleApprove = async(_address, _amount, _from) =>{
    // debugger
    const provider = await detectEthereumProvider();
    let web3 = new Web3(provider);

    const erc20 = new web3.eth.Contract(
        ERC20_ABI, 
        _address
    );
    return await erc20.methods.approve(
        process.env.REACT_APP_PITCHSHOW_ADDRESS, 
        _amount*10^18
        ).send({ from: _from });
}

export const _isWhitelisted = async(_id) =>{
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