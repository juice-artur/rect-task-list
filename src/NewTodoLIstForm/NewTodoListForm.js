﻿import {useDispatch} from "react-redux";
import {addTaskList} from "../store/dashboard/addTaskListAction";
import "./NewTodoListForm.css"
const NewTodoListForm = () => {
    const dispatch = useDispatch();

    const onClickAdd = (event) => {
        event.preventDefault();
        dispatch(addTaskList(event.target.title.value));
    };

    return (
        <form onSubmit={onClickAdd} name="taskForm" id="addForm">
            <input className='item' type="text" name="title"  placeholder="Enter list title" required/>
            <button className='add-list-button'  type="submit">Add list</button>
        </form>
    );
};
export default NewTodoListForm ;