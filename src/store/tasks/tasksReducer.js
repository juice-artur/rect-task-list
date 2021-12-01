import {TASKS_LOADED} from './tasksAction'
import {combineReducers} from "redux";
import {TASK_STATUS_UPDATED} from "../dashboard/updateTaskStatusAction";

const patchTask = (state,id, listId, done) => {
    console.log("tt"+ state)
    return state.map(x => x.id === id? {...x, done: done}: x);
}

const tasksReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_LOADED:
            return action.payload;
        case TASK_STATUS_UPDATED:
            state.map(x => x.id === action.payload.id ? {...x, done: action.payload.done}: x);
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})