import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import taskApi from "../../Api/TaskListApi";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";

const TodoListPage = () => {
    
    const params = useParams();
    const [currentListTask, setCurrentListTask] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        taskApi.getOpenTasks(params.id, isOpen).then((data) => setCurrentListTask(data));
        console.log("seEffect")
    }, [params.id, isOpen]);

    let deleteTask= (taskId) => {
        taskApi.deleteTask(taskId)
            .then(() => taskApi.getOpenTasks(params.id, isOpen)
                .then((data) => setCurrentListTask(data)))
    }

    let changeState = (task) => {
        taskApi.patchTask(task)
            .then(() => taskApi.getOpenTasks(params.id, isOpen)
                .then((data) => setCurrentListTask(data)));
    }


    let addTask= (task) => {
        taskApi.createTask(task, params.id)
            .then(response => response.json())
            .then(task__ => taskApi.getOpenTasks(task__.taskListId, isOpen)
                .then((data) => setCurrentListTask(data)));

    }
    
    
    return (
        <div className="test-div">

            <label>
                Only open task
                <input type="checkbox"  onClick={() => setIsOpen(!isOpen)}/>
            </label>
            <ShowTasks currentList = {currentListTask} deleteTask ={deleteTask} changeState={changeState}/>
            <NewTaskForm addTask ={addTask} currentListTask = {currentListTask}/>
        </div>
    )
}  
export default TodoListPage