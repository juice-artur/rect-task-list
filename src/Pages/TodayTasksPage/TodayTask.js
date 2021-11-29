import {Link} from "react-router-dom";
import React, {useState} from "react";
import classNames from "classnames";


const TodayTask = (props) => {
    let task = props.task;
    function isExpired(date)
    {
        return new Date(date) < Date.now();
    }
    
    function onClickDelete() {
        props.deleteTask(task);
    }

    let soldCheckbox = (event)=> {
        let _done = !task.done;
        let test ={id: task.taskId, taskListId:task.list.taskListId, title: task.title, description: task.description, dueDate: task.dueDate, done:  _done };
        console.log('test: ' + _done );
        props.changeState(test);
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
            <div  className="desc">
                <p>{task.description}</p>
            </div>
            <div className={classNames('date', {'date-red': (isExpired(task.dueDate) && !task.done)})}>
                <p>{task.dueDate}</p>
            </div>
        </div>
    );
};
export default  TodayTask;