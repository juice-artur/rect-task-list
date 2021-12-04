import taskApi from "../../Api/TaskListApi";
import {TASKS_TODAY_LOADED} from "../actions/types";

export const loadTodayTasks = () => dispatch => {
    taskApi.getTodayTasks()
        .then(tasksToday => dispatch({
            type: TASKS_TODAY_LOADED,
            payload: tasksToday
        }))
};