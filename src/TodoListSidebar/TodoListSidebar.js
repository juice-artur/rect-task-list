import React, {Component} from "react";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
/*import TaskListApi from '../Api/TaskListApi'
TaskListApi.getOpenTasks().then(r => console.log(r));*/
import "./TodoListSidebar.css";


class TodoListSidebar extends Component
{
    render()
    {
        return(
        <ProSidebar collapsed={false}>
            <SidebarHeader class = 'pro-sidebar-header'>
                <div>
                    <p>Task Lists</p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Category</MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
        )
    }

}

export default TodoListSidebar;