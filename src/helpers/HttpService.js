import axios from 'axios';
import { toast } from 'react-hot-toast';

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
