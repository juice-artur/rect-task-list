import React, {Component} from "react";
import {MenuItem} from "react-pro-sidebar";

export class TaskList extends Component{
    constructor(props) {
        super();
        this.state = {title: props.title}
    }
   render()
    {
        const {title} = this.state;
        return( <MenuItem>{title}</MenuItem>)   
    }
}
