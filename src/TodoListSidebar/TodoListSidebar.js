import React, {Component, useState, useEffect} from "react";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import {TaskList} from "./TaskList";
import taskApi from "../Api/TaskListApi";


const TodoListSidebar = () => {
    const [count, setCount] = useState([]);
    useEffect(() => {
        taskApi.getTaskLists().then((data) => setCount(data));
    }, []);
        return (
            <ProSidebar collapsed={false}>
                <SidebarHeader className='pro-sidebar-header'>
                    <div>
                        <p>Task Lists</p>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        {count.map(tl =>  <TaskList key={tl.id} id={tl.id} title={tl.title} />)}
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                </SidebarFooter>
            </ProSidebar>
        )
    
}

export default TodoListSidebar;