import { DASHBOARD_LOADED } from './dashboardAction'
import {combineReducers} from "redux";

function openedTasksReducer(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            let _openedTasks ={};
            action.payload.lists.forEach(currentTask => _openedTasks[currentTask.taskListId] = currentTask.countOpenTasks)
            return _openedTasks;
        default:
            return state;
    }

}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.taskTodayCount : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})