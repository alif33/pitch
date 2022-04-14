import { projectSlice, userSlice } from "./slice";
const { actions: slice } = projectSlice;

export const setProjects = projects => (dispatch) => {
    dispatch(slice.setProjects(projects))
}
