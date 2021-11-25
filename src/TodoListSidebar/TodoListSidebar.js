import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";
import TaskList from "./TaskList";


const TodoListSidebar = (props) => {
    let lists = props.lists;
    return (
        <ProSidebar collapsed={false}>
            <SidebarHeader className='pro-sidebar-header'>
                <div>
                    <p>Task Lists</p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    {lists.map(tl => <TaskList key={tl.id} list={tl} changeListHandler={props.changeListHandler}/>)}
                </Menu>
            </SidebarContent>
            <SidebarFooter>
            </SidebarFooter>
        </ProSidebar>
    )

}

export default TodoListSidebar;