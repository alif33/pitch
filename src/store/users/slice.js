import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../../utils/schema';



export const userSlice = createSlice({
    name: "users",
    initialState: {
        ...userData
    },
    reducers: {

        userLogin: (state, action) => {
            return {
                ...state,
                isUser: true,
                token: action.payload.token,
                user: action.payload.user
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
