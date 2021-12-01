import taskApi from "../../Api/TaskListApi";

export const TASK_STATUS_UPDATED = 'TASK_STATUS_UPDATED'
export const updateStatus = (task,patchInfo) => dispatch => {
    taskApi.patchTask(task)
        .then(currentTask => dispatch({
            type: TASK_STATUS_UPDATED,
            payload: patchInfo
        }))
};