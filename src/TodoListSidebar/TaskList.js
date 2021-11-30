import React from "react";
import {MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";

const TaskList = (props) => {
    let list = props.list;
    let count = list.countOpenTasks;
    return(
            <MenuItem> 
                {list.title} {count === 0 ? '' : `(${count})`}
                <Link to={`/todo-list/${list.taskListId}`}/>
            </MenuItem>)
    
}

export default TaskList;
