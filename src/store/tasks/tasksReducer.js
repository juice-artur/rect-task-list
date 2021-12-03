import {TASKS_LOADED} from './tasksAction'
import {combineReducers} from "redux";
import {TASK_STATUS_UPDATED} from "../dashboard/updateTaskStatusAction";
import {CREATE_TASK} from "./addTaskAction";


const tasksReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_LOADED:
            return action.payload;
        case TASK_STATUS_UPDATED:
            return  state.map(x => x.id === action.payload.id ? {...x, done: action.payload.done}: x);
        case CREATE_TASK:
            console.log("Task is " + JSON.stringify(action.payload));
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})