import React, {Component} from "react";
import {MenuItem} from "react-pro-sidebar";

export class TaskList extends Component{
    constructor(props) {
        super();
        this.state = {
            title: props.title,
            id: props.id
        };
    }
   render()
    {
        const {title} = this.state;
        return( <MenuItem onClick={e => console.log(this.props.id)}>{title} </MenuItem>)   
    }
}
