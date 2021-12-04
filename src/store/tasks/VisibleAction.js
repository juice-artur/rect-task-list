
export const TASKS_CHANGE_VISIBLE = 'tasks/changVisible'
export const changVisible = (onlyOpen) => 
    ({
        type: TASKS_CHANGE_VISIBLE,
        payload: !onlyOpen
    });