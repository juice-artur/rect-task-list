import {combineReducers} from "redux";
import {TASKS_TODAY_LOADED} from "./collectionAction";
import {DELETE_TASK} from "../tasks/deleteTaskAction";
import {TASK_STATUS_UPDATED} from "../dashboard/updateTaskStatusAction";



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