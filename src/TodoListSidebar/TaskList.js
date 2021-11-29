import React from "react";
import {MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";

const TaskList = (props) => {
    let list = props.list;
    /*let onChange = () => {
        props.changeCurrentListTask(list.taskListId, list.taskListId);
        
    }*/
    return(
            <MenuItem> 
                {list.title} {list.countOpenTasks === 0 ? '' : `(${list.countOpenTasks})`}
                <Link to={`/todo-list/${list.taskListId}`}/>
            </MenuItem>)
    
}

export default TaskList;
