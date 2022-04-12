import { userSlice } from "./slice";
const { actions: slice } = userSlice;

export const setContact = info => (dispatch) => {
    dispatch(slice.setContact(info))
}

export const userLogout = () => (dispatch) => {
    dispatch(slice.userLogout())
}
