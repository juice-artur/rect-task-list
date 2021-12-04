import {combineReducers} from "redux";
import {CREATE_TASK, DASHBOARD_LOADED, DELETE_TASK, TASK_STATUS_UPDATED} from "../actions/types";


function openedTasksReducer(state = {}, action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            let _openedTasks ={};
            action.payload.lists.forEach(currentTask => _openedTasks[currentTask.taskListId] = currentTask.countOpenTasks)
            return _openedTasks;
        case TASK_STATUS_UPDATED:
            return {...state, [action.payload.listId]: (state[action.payload.listId] += !action.payload.done - action.payload.done)};
        case CREATE_TASK:
            return {...state, [action.payload.taskListId]: (state[action.payload.taskListId] += 1)};
        case DELETE_TASK:
            return {...state, [action.payload.listId]: (state[action.payload.listId] -= action.payload.done? 0 : 1)};
        default:
            return state;
    }

}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.taskTodayCount : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})