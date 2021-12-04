import {TASKS_CHANGE_VISIBLE} from "../actions/types";

export const changVisible = (onlyOpen) => 
    ({
        type: TASKS_CHANGE_VISIBLE,
        payload: !onlyOpen
    });