import React, {Component} from "react";
import taskApi from "../Api/TaskListApi";

//TODO: Do work this function
function onClickDelete(id) {
    console.log("Test: " + {id})
}

export class Task extends Component{
    
    constructor(props) {
        super();
        this.state = {
            taskListId: props.taskListId,
            title: props.title,
            description: props. description,
            dueDate: props.dueDate,
            done: props.done,
            id: props.id
        };
    }
    
    render()
    {
        const {title} = this.state.title;
        return(
            <div className="task-to-output">
                <div className='task-head'>
                    <input className="task-isDone-checkBox" type="checkbox" checked={this.state.done} onChange={(event ) =>console.log('change' + this.state.id)}/>
                    <p>{this.state.title}</p>
                    {/*//TODO: Fixed input and make clickable checkbox*/}
                    <button className='remove-button' onClick={(event) => onClickDelete(this.state.title)}> Delete task </button>
                </div>
                <div className="desc">
                    <p >{this.state.description}</p>
                </div>
                <div className="date">
                    <p>{this.state.dueDate}</p>
                </div>
            </div>
        )
    }
    

}