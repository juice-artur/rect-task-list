import taskApi from "../../Api/TaskListApi";
import {CREATE_TASK} from "../actions/types";

export const createTask = (task, listId) => dispatch => {
    taskApi.createTask(task, listId)
        .then(res=> dispatch({
            type: CREATE_TASK,
            payload: res
        }))
};