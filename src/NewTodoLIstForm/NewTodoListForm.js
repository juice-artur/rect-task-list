import {useDispatch} from "react-redux";
import {addTaskList} from "../store/dashboard/addTaskListAction";
import "./NewTodoListForm.css"
import {IoAddOutline, MdOutlineTitle} from "react-icons/all";

import { useFormik } from 'formik';



import React from 'react';

const NewTodoListForm = () => {
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            listTitle: '',
        },
        onSubmit: values => {
            dispatch(addTaskList(values.listTitle));
            formik.resetForm();
        },
    });
    return (
        <form className={"new-todo-list"} onSubmit={formik.handleSubmit}>
            <label htmlFor="list-title"><MdOutlineTitle/> List title</label>
            <input
                required
                placeholder="Enter list title"
                id="listTitle"
                name="listTitle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.listTitle}
            />

            <button type="submit"> <IoAddOutline/>Add list</button>
        </form>
    );
};
export default NewTodoListForm ;

