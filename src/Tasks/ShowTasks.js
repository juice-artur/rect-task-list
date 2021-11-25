import React, {useState, useEffect} from "react";
import taskApi from "../Api/TaskListApi";
import {Task} from "./Task";
import "./ShowTasks.css" 
import {TaskList} from "../TodoListSidebar/TaskList";


const ShowTasks = () => {
    const [count, setCount] = useState([]);
    useEffect(() => {
        taskApi.getOpenTasks().then((data) => setCount(data));
    }, []);
    return (
        <div className='format-task-to-show'>
            {count.map(tl => <Task key={tl.id} id={tl.id} title={tl.title} done ={tl.done} description = {tl.description} dueDate = {tl.dueDate}/>)}
        </div>
    )

}

export default  ShowTasks;