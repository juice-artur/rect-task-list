import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import TaskList from "./TaskList";
import {NavLink} from "react-router-dom";
import "./TodoListSidebar.scss"
import {useDispatch, useSelector} from "react-redux";
import {loadDashboard} from "../store/dashboard/dashboardAction";
import {useEffect} from "react";
import NewTodoListForm from "../NewTodoLIstForm/NewTodoListForm";

const TodoListSidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => loadDashboard(dispatch), [dispatch])
    let lists = useSelector(state => state.dashboard.lists)
    
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
                        <NavLink to="/today">Today Tasks</NavLink>
                    </MenuItem>
                    <SubMenu title="Lists">
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