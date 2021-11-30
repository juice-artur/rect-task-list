import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import TaskList from "./TaskList";
import {useState, useEffect} from "react";
import taskApi from "../Api/TaskListApi";
import {Link} from "react-router-dom";

const TodoListSidebar = () => {
    
    const [lists, setLists] =  useState([])
    
    useEffect(() => {
        taskApi.getDashboard().then((data) => setLists(data.lists));
        console.log("seEffect")
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
                    <MenuItem>
                        Today Tasks
                        <Link to="/today" />
                    </MenuItem>
                    <SubMenu title="Lists">
                        {lists.map(tl => <TaskList key={tl.taskListId} list={tl}> </TaskList>)}
                    </SubMenu>
                    <MenuItem>
                        <label>
                            Only open task 
                            <input type="checkbox" />
                        </label>
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
        </ProSidebar>
    )

}

export default TodoListSidebar;