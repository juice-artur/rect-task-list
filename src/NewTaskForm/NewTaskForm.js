
import "./NewTaskForm.css"
import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from "react-redux";
import {createTask} from "../store/tasks/addTaskAction";
import {IoAddOutline} from "react-icons/all";

const NewTaskForm = (props) => {
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            dueDate:  ''
        },
        onSubmit: values => {
            let task = {taskListId : props.listId,
                title: values.title,
                description: values.description,
                dueDate:values.dueDate,
                done: false};
            dispatch(createTask(task, props.listId));
            formik.resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label  htmlFor="title">Title</label>
            <input
                placeholder="Enter task title"
                className={"item"}
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="description">Description</label>
            <input
                placeholder="Enter task desc"
                className={"item"}
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
            />

            <label htmlFor="dueDate">Dedline</label>
            <input
                className={"item"}
                id="dueDate"
                name="dueDate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dueDate}
            />

            <button type="submit"><IoAddOutline/>Add task</button>
        </form>
    );
};

export default NewTaskForm;