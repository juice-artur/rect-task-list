import taskApi from "../../Api/TaskListApi";
import {TASKS_LOADED} from "../actions/types";

export const loadTasks = (listId, isOpen) => dispatch => {
    taskApi.getOpenTasks(listId, isOpen)
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload: tasks
        }))
};