import React from "react";
import {MenuItem} from "react-pro-sidebar";
import {NavLink} from "react-router-dom";

const TaskList = (props) => {
    let list = props.list;
    let count = list.countOpenTasks;
    return(
            <MenuItem>
                <NavLink to={`/todo-list/${list.taskListId}`} >{list.title} {count === 0 ? '' : `(${count})`}</NavLink>
            </MenuItem>)
    
}

export default TaskList;
