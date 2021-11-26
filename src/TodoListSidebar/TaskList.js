import React, {Component} from "react";
import {MenuItem} from "react-pro-sidebar";

const TaskList = (props) => {
    let list = props.list;
    let onChange = () => {
        console.log(list.id);
        props.changeCurrentListTask(list.id);
    }
    return( <MenuItem onClick={onChange}>{list.title} </MenuItem>)
}

export default TaskList;
