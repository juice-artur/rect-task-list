import {Link} from "react-router-dom";
import React, {useState} from "react";


const TodayTask = (props) => {
    let task = props.task;
    console.log("this: " + task)
    
    function onClickDelete() {
        props.deleteTask(task);
    }

    let soldCheckbox = (event)=> {
        task.done = !task.done;
        props.changeState(task);
        console.log(task);
    }
    
    
    return (
        <div className="task-to-output">
            <Link className='text-link' to={`/todo-list/${task.list.taskListId}`}>
                <div className="task-list-title">
                    <p>{task.list.title}</p>
                </div>
            </Link>
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" defaultChecked={task.done} onChange={soldCheckbox}/>
                <p>{task.title}</p>
                <button className='remove-button' onClick={onClickDelete}> Delete task</button>
            </div>
            <div className="desc">
                <p>{task.description}</p>
            </div>
            <div className="date">
                <p>{task.dueDate}</p>
            </div>
        </div>
    );
};
export default  TodayTask;