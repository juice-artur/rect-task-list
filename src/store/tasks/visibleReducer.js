import {combineReducers} from "redux";
import {TASKS_CHANGE_VISIBLE} from "../actions/types";

const visibleReducer = (state = false, action) => {
    switch (action.type){
        case  TASKS_CHANGE_VISIBLE:
            return !state

        default:
            return state;
    }
}

export default combineReducers({
    onlyOpen: visibleReducer
})