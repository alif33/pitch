import { projectSlice } from "./slice";
import { projectdata } from "../../utils/config"
const { actions: slice } = projectSlice;


const formatArr = async( arr )=>{
    let projects = [];

    await arr.forEach(el => {
        const obj = Object.assign({}, el);
        const assignee = {};
        assignee.project_name = obj[0];
        assignee.token_address = obj[1];
        assignee.symbol = obj[2];
        assignee.swap_rate = obj[3];
        assignee.token_amount = obj[4];
        assignee.available_token_amount = obj[5];
        assignee.start_time = obj[6];
        assignee.end_time = obj[7];
        projects.push(assignee)
    });
    return projects; 
}

export const setProjects = projects => async(dispatch) => {
    dispatch(slice.setProjects(await formatArr(projectdata)))
}
