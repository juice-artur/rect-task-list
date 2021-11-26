import './App.css';
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";
import ShowTasks from "./Tasks/ShowTasks";
import {useEffect, useState} from "react";
import taskApi from "./Api/TaskListApi";
import NewTaskForm from "./NewTaskForm/NewTaskForm"; 
function App() {
    const [lists, setLists] = useState([]);
    const [currentListTask, setCurrentListTask] = useState([]);
    const [currentListId, setCurrentListId] = useState();
    
    
    useEffect(() => {
        taskApi.getTaskLists().then((data) => setLists(data));
        console.log("seEffect")
    }, []);
    
    
    let changeCurrentListTask= (listId, id) => {
        console.log("changeCurrentListTask"+ JSON.stringify(id));
        taskApi.getOpenTasks(listId).then((data) => setCurrentListTask(data));
        setCurrentListId(id);
    }

    let deleteTask= (taskId) => {
        console.log("deleteTask");
        console.log(taskId);
        console.log(currentListId);
        taskApi.deleteTask(taskId).then(temp => taskApi.getOpenTasks(currentListId).then((data) => setCurrentListTask(data))).then(setCurrentListId(currentListId));
    }
    

    let addTask= (task) => {
        console.log("id is: "+ currentListId);
        taskApi.createTask(task, currentListId).then(response => response.json()).then(task__ => taskApi.getOpenTasks(task__.taskListId).then((data) => setCurrentListTask(data)));
    }
    
    
  return (
    <div className="App">
        <div className="main-info">
            <TodoListSidebar lists={lists} changeCurrentListTask={changeCurrentListTask}/>
            <ShowTasks currentList = {currentListTask} deleteTask ={deleteTask}/>
            <NewTaskForm addTask ={addTask} currentListTask = {currentListTask}/>
        </div>
    </div>
  );
}

export default App;
