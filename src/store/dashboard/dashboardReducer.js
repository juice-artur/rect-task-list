import { DASHBOARD_LOADED } from './dashboardAction'
import {combineReducers} from "redux";
import {TASK_STATUS_UPDATED} from "./updateTaskStatusAction";

function openedTasksReducer(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            let _openedTasks ={};
            action.payload.lists.forEach(currentTask => _openedTasks[currentTask.taskListId] = currentTask.countOpenTasks)
            return _openedTasks;
        case TASK_STATUS_UPDATED:
            console.log("-------");
            let newState = state;
            newState[action.payload.listId] += action.payload.done === true? -1 : 1;
            return newState;
        default:
            return state;
    }

}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.taskTodayCount : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})