import React, {Component} from "react";
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import "./TodoListSidebar.css";

class TodoListSidebar extends Component {
    constructor() {
        super();
        this.state = {title: "title"}
    }
    render() {
        return (
            <ProSidebar collapsed={false}>
                <SidebarHeader class='pro-sidebar-header'>
                    <div>
                        <p>Task Lists</p>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem>{this.state.title}</MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                </SidebarFooter>
            </ProSidebar>
        )
    }

}

export default TodoListSidebar;