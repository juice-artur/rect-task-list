import taskApi from "../../Api/TaskListApi";

export const CREATE_TASK= 'tasks/create'
export const createTask = (task, listId) => dispatch => {
    taskApi.createTask(task, listId)
        .then(res=> dispatch({
            type: CREATE_TASK,
            payload: res
        }))
};