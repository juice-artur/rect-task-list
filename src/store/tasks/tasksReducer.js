import {combineReducers} from "redux";
import {CREATE_TASK, DELETE_TASK, TASK_STATUS_UPDATED, TASKS_LOADED} from "../actions/types";

const tasksReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_LOADED:
            return action.payload;
        case TASK_STATUS_UPDATED:
            return  state.map(x => x.id === action.payload.id ? {...x, done: action.payload.done}: x);
        case CREATE_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(t => t.id !== action.payload.taskID)
            
        default:
            return state;
    }
}

export default combineReducers({
    tasks: tasksReducer
})