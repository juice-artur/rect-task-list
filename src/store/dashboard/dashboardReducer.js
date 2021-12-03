import { DASHBOARD_LOADED } from './dashboardAction'
import {combineReducers} from "redux";
import {TASK_STATUS_UPDATED} from "./updateTaskStatusAction";

function openedTasksReducer(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            let _openedTasks ={};
            action.payload.lists.forEach(currentTask => _openedTasks[currentTask.taskListId] = currentTask.countOpenTasks)
            console.log(_openedTasks)
            return _openedTasks;
        case TASK_STATUS_UPDATED:
            return {...state, [action.payload.listId]: (state[action.payload.listId] += !action.payload.done - action.payload.done)};
        default:
            return state;
    }

}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.taskTodayCount : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})