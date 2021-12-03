import taskApi from "../../Api/TaskListApi";

export const TASKS_TODAY_LOADED = 'tasks/today/loaded'
export const loadTodayTasks = () => dispatch => {
    taskApi.getTodayTasks()
        .then(tasksToday => dispatch({
            type: TASKS_TODAY_LOADED,
            payload: tasksToday
        }))
};