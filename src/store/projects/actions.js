import { projectSlice } from "./slice";
import { projectData } from "../../utils/config"
const { actions: slice } = projectSlice;


const formatArr = async( arr )=>{
    let projects = [];

    await arr.forEach((el, i) => {
        const obj = Object.assign({}, el);
        const assignee = {};
        assignee.project_id = i;
        assignee.project_name = obj[0];
        assignee.token_address = obj[1];
        assignee.image = obj[2];
        assignee.symbol = obj[3];
        assignee.swap_rate = obj[4];
        assignee.token_amount = obj[5];
        assignee.available_token_amount = obj[6];
        assignee.start_time = obj[7];
        assignee.end_time = obj[8];
        projects.push(assignee)
    });
    return projects; 
}

export const setProjects = projects => async(dispatch) => {
    // dispatch(slice.setProjects(projects))
    dispatch(slice.setProjects(await formatArr(projectData)));
}
