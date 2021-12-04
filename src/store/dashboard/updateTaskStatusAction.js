import taskApi from "../../Api/TaskListApi";
import {TASK_STATUS_UPDATED} from "../actions/types";

export const updateStatus = (task) => dispatch => {
    taskApi.patchTask(task)
        .then(currentTask => dispatch({
            type: TASK_STATUS_UPDATED,
            payload: {
                id: task.id,
                listId: currentTask.taskListId,
                done: currentTask.done
            }
        }))
};