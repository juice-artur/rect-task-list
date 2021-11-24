import React, {Component} from "react";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import TaskListApi from '../Api/TaskListApi'


TaskListApi.getOpenTasks().then(r => console.log(r));


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
                    <SidebarFooter>
                    </SidebarFooter>
                </ProSidebar>
        )
    }

}

export default TodoListSidebar;