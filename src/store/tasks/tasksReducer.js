import {TASKS_LOADED} from './tasksAction'
import {combineReducers} from "redux";
import {TASK_STATUS_UPDATED} from "../dashboard/updateTaskStatusAction";

const patchTask = (state, patchInfo) => {
    console.log(state);
    return state.map(x => x.id === patchInfo.id? {...x, done: patchInfo.done}: x);
}

const tasksReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_LOADED:
            return action.payload;
        case TASK_STATUS_UPDATED:
            return patchTask(state, action.payload);
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})