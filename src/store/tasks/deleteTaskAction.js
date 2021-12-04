import taskApi from "../../Api/TaskListApi";
import {DELETE_TASK} from "../actions/types";

export const deleteTask = (taskID,listId, done ) => dispatch => {
    taskApi.deleteTask(taskID)
        .then(() => dispatch({
            type: DELETE_TASK,
            payload: {
                taskID: taskID,
                listId: listId,
                done:done
            }
        }))
};