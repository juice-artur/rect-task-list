import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import TaskList from "./TaskList";
import {NavLink} from "react-router-dom";
import "./TodoListSidebar.scss"
import {useDispatch, useSelector} from "react-redux";
import {loadDashboard} from "../store/dashboard/dashboardAction";
import React, {useEffect} from "react";
import NewTodoListForm from "../NewTodoLIstForm/NewTodoListForm";
import {changVisible} from "../store/tasks/VisibleAction";
import {BsListTask, IoListSharp, IoToday} from "react-icons/all";

const TodoListSidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => loadDashboard(dispatch), [dispatch])
    let lists = useSelector(state => state.dashboard.lists)
    const isOpen = useSelector(state => state.onlyOpen.onlyOpen)
    
    return (
        <ProSidebar collapsed={false}>
            <SidebarHeader className='pro-sidebar-header'>
                <div>
                    <p>Task Lists</p>
                    <label>
                        Only open task
                        <input type="checkbox"  onClick={() =>dispatch(changVisible(isOpen))}/>
                    </label>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<IoToday />}>
                        <NavLink to="/today">Today Tasks</NavLink>
                    </MenuItem>
                    <SubMenu title="Lists" icon={<IoListSharp/>}>
                        {lists.map(tl => <TaskList key={tl.taskListId} list={tl}> </TaskList>)}
                    </SubMenu>
                    <MenuItem>
                        <div className="input-group">
                           <NewTodoListForm/>
                        </div>
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
        </ProSidebar>
    )

}

export default TodoListSidebar;