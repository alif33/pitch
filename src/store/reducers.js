import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { projectSlice } from './projects/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    projects: projectSlice.reducer
})