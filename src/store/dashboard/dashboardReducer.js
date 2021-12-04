import {combineReducers} from "redux";
import {
    ADD_TODOLIST,
    CREATE_TASK,
    DASHBOARD_LOADED,
    DELETE_TASK,
    DELETE_TODOLIST,
    TASK_STATUS_UPDATED
} from "../actions/types";


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

function listsReducer(state = [], action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload.lists;
        case ADD_TODOLIST:
            return [...state, {
                taskListId: action.payload.id,
                title:action.payload.title,
                countOpenTasks:0
            }]
        case DELETE_TODOLIST:
            console.log(state)
            return state.filter(t => t.taskListId !=  action.payload)
        default:
            return state;
    }    
}



export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.taskTodayCount : today,
    lists: listsReducer,
    openedTasks: openedTasksReducer
})