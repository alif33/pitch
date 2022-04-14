import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: []
    },
    reducers: {

        setProjects: (state, action) => {

            return {
                ...state,
                projects: action.payload
            }
 
        },
    },
})
