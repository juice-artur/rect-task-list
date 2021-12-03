import taskApi from "../../Api/TaskListApi";

export const DELETE_TASK= 'tasks/delete'
export const deleteTask = (taskID) => dispatch => {
    taskApi.deleteTask(taskID)
        .then(() => dispatch({
            type: DELETE_TASK,
            payload: taskID
        }))
};