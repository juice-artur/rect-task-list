import {Link} from "react-router-dom";
import React from "react";
import classNames from "classnames";
import moment from "moment";
import {deleteTask} from "../../store/tasks/deleteTaskAction";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../store/dashboard/updateTaskStatusAction";


const TodayTask = (props) => {
    const dispatch = useDispatch();
    let task = props.task;
    function isExpired(date)
    {
        return new Date(date) < Date.now();
    }
    
    function onClickDelete() {
       dispatch(deleteTask(task.taskId, task.list.taskListId, task.done));
    }

    let soldCheckbox = (event)=> {
        let _done = !task.done;
        let test ={id: task.taskId, taskListId:task.list.taskListId, title: task.title, description: task.description, dueDate: task.dueDate, done:  _done };
        dispatch(updateStatus(test));
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
                <p className={classNames({'done-title' : task.done})}>{task.title}</p>
                <button className='remove-button' onClick={onClickDelete}> Delete task</button>
            </div>
            <div  className="desc">
                <p>{task.description}</p>
            </div>
            <div className={classNames('date', {'date-red': (isExpired(task.dueDate) && !task.done)})}>
                <p>{moment(new Date(task.dueDate)).format('YYYY/MM/DD')}</p>
            </div>
        </div>
    );
};
export default  TodayTask;