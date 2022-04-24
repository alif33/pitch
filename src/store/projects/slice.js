import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projectsList: []
    },
    reducers: {

        setProjects: (state, action) => {

            return {
                ...state,
                projectsList: action.payload
            }
 
        },
    },
})
