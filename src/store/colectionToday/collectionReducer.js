import {combineReducers} from "redux";
import {TASKS_TODAY_LOADED} from "./collectionAction";



const collectionReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_TODAY_LOADED:
            return action.payload;
/*        case TASK_STATUS_UPDATED:
            return  state.map(x => x.id === action.payload.id ? {...x, done: action.payload.done}: x);
        case CREATE_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(t => t.id !== action.payload.taskID)*/

        default:
            return state;
    }
}

export default combineReducers({
    tasksToday: collectionReducer
})