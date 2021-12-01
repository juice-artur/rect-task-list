import taskApi from "../../Api/TaskListApi";

export const TASKS_LOADED = 'tasks/loaded'
export const loadTasks = (listId, isOpen) => dispatch => {
    taskApi.getOpenTasks(listId, isOpen)
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload: tasks
        }))
};