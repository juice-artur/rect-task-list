import Task from "./Task";
import "./ShowTasks.css"
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {AiFillDelete} from "react-icons/all";
import {deleteTaskList} from "../store/dashboard/deleteTaskListAction"; 

const ShowTasks = (props) => {
    const dispatch = useDispatch();
    let list = props.currentList;
    const isOpen = useSelector(state => state.onlyOpen.onlyOpen)
    let toShow = list;
    if(isOpen === true)
    {
        toShow = toShow.filter(t => t.done ===false)
    }

    function onClickDelete() {
        dispatch(deleteTaskList(props.listId));
    }

    return (
        <div className='format-task-to-show'>
            <button className='delete-todo-list-button' onClick={onClickDelete}>
                <AiFillDelete/> Delete list
            </button>
                {toShow.map(tl => <Task key={tl.id} task={tl}/>)}
        </div>
    )
}
export default  ShowTasks;