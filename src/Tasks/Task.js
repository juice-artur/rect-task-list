import React, {useState} from "react";
import classNames from "classnames";
import moment from "moment";
import {deleteTask} from "../store/tasks/deleteTaskAction";
import {useDispatch} from "react-redux";

const Task = (props) => {
    const dispatch = useDispatch();
    function isExpired(date)
    {
        return new Date(date) < Date.now();
    }
    
    let task = props.task;
    const [x, setX] = useState(task);
    function onClickDelete() {
        dispatch(deleteTask(task.id, task.taskListId, task.done));
    }
    
    let soldCheckbox = (event)=> {
        x.done = !x.done;
        setX({...task, done: x.done});
        props.changeState(x)
    }
    return (
        <div className="task-to-output">
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" defaultChecked={x.done} onChange={soldCheckbox}/>
                <p className={classNames({'done-title' : task.done})}>{x.title}</p>
                <button className='remove-button' onClick={onClickDelete}> Delete task </button>
            </div>
            <div className="desc">
                <p >{x.description}</p>
            </div>
            <div className={classNames('date', {'date-red': (isExpired(task.dueDate) && !task.done)})}>
                <p> {x.dueDate === null ? " " : moment(new Date(x.dueDate)).format('YYYY/MM/DD')} </p>
            </div>
        </div>
    )
};
export default  Task;