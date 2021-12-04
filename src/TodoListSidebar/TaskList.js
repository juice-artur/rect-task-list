import React, {useEffect} from "react";
import {MenuItem} from "react-pro-sidebar";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDashboard} from "../store/dashboard/dashboardAction";
import {BsListTask} from "react-icons/all";

const TaskList = (props) => {
    let list = props.list;
    const dispatch = useDispatch();
    useEffect(() => loadDashboard(dispatch), [dispatch])
    let count = useSelector(state => state.dashboard.openedTasks)
    return(
            <MenuItem icon={<BsListTask />}>
                <NavLink to={`/todo-list/${list.taskListId}`} >{list.title} {count[list.taskListId] === 0 ? '' : `(${count[list.taskListId]})`}</NavLink>
            </MenuItem>)
    
}

export default TaskList;
