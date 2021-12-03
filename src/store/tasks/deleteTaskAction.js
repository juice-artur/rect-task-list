import taskApi from "../../Api/TaskListApi";

export const DELETE_TASK= 'tasks/delete'
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