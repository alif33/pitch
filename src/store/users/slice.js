import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../../utils/schema';



export const userSlice = createSlice({
    name: "users",
    initialState: {
        ...userData
    },
    reducers: {

        setContact: (state, action) => {
            const { name, email, number } = action.payload;
            return {
                ...state,
                contactInfo: {
                    name,
                    email,
                    phoneNumber: number
                }
            }
 
        },

        userLogout: (state, action) => {
            return {
                ...state,
                isUser: false,
                token: '',
                user: null
            }
        }
    }
})
