import "./TodoListPage.css"
import ShowTasks from "../Tasks/ShowTasks";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";
import taskApi from "../Api/TaskListApi";
import {useEffect, useState} from "react";

const TodoListPage = () => {
    
    const params = useParams();
    const [currentListTask, setCurrentListTask] = useState([]);
    taskApi.getOpenTasks(params.id).then((data) => setCurrentListTask(data));

    let deleteTask= (taskId) => {
        taskApi.deleteTask(taskId)
            .then(() => taskApi.getOpenTasks(params.id)
                .then((data) => setCurrentListTask(data)))
    }

    let changeState = (task) => {
        taskApi.patchTask(task, params.id)
            .then(() => taskApi.getOpenTasks(params.id)
                .then((data) => setCurrentListTask(data)));
    }


    let addTask= (task) => {
        taskApi.createTask(task, params.id)
            .then(response => response.json())
            .then(task__ => taskApi.getOpenTasks(task__.taskListId)
                .then((data) => setCurrentListTask(data)));

    }
    
    
    return (
        <div className="test-div"> 
            <ShowTasks currentList = {currentListTask} deleteTask ={deleteTask} changeState={changeState}/>
            <NewTaskForm addTask ={addTask} currentListTask = {currentListTask}/>
        </div>
    )
}  
export default TodoListPage