import React from "react";
import {MenuItem} from "react-pro-sidebar";
import {Routes} from "react-router-dom";

const TaskList = (props) => {
    let list = props.list;
    let onChange = () => {
        props.changeCurrentListTask(list.taskListId, list.taskListId);
        
    }
    return( <MenuItem onClick={onChange}>{list.title} {list.countOpenTasks === 0 ? '' : `(${list.countOpenTasks})`} </MenuItem>)
}

export default TaskList;
