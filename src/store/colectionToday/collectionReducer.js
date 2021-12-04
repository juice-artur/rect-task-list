import {combineReducers} from "redux";
import {DELETE_TASK, TASK_STATUS_UPDATED, TASKS_TODAY_LOADED} from "../actions/types";



const collectionReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_TODAY_LOADED:
            return action.payload;
        case DELETE_TASK:
            return state.filter(t => t.taskId !== action.payload.taskID)
        case TASK_STATUS_UPDATED:
            return  state.map(x => x.taskId === action.payload.id ? {...x, done: action.payload.done}: x);
                
        default:
            return state;
    }
}

export default combineReducers({
    tasksToday: collectionReducer
})