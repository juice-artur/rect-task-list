import {TASKS_LOADED} from './tasksAction'
import {combineReducers} from "redux";

export default combineReducers({
    tasks: (tasks = [], {type, payload}) => type === TASKS_LOADED ? payload.tasks : tasks
})