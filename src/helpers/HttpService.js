import axios from 'axios';
import { toast } from 'react-hot-toast';
import {  PITCHSHOW_ABI } from '../utils/config'
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

export const fetchData = async (endPoint, formData) => {
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

