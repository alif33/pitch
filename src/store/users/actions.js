import { userSlice } from "./slice";
const { actions: slice } = userSlice;

export const setContact = info => (dispatch) => {
    dispatch(slice.setContact(info))
}
export const setCompanyInfo = info => (dispatch) => {
    dispatch(slice.setCompanyInfo(info))
}
export const setMetricsInfo = info => (dispatch) => {
    dispatch(slice.setMetricsInfo(info))
}
export const setListingInfo = info => (dispatch) => {
    dispatch(slice.setListingInfo(info))
}
export const setPartnersInfluencers = info => (dispatch) => {
    dispatch(slice.setPartnersInfluencers(info))
}
export const setListingStrategy = info => (dispatch) => {
    dispatch(slice.setListingStrategy(info))
}

export const userLogout = () => (dispatch) => {
    dispatch(slice.userLogout())
}
