import './App.css';
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";
import ShowTasks from "./Tasks/ShowTasks";
import {useEffect, useState} from "react";
import taskApi from "./Api/TaskListApi";
import NewTaskForm from "./NewTaskForm/NewTaskForm"; 
function App() {
    const [lists, setLists] = useState([]);
    const [currentListTask, setCurrentListTask] = useState([]);
    
    
    useEffect(() => {
        taskApi.getTaskLists().then((data) => setLists(data));
        console.log("seEffect")
    }, []);
    
    
    let changeCurrentListTask= (listId) => {
        console.log("changeCurrentListTask");
        taskApi.getOpenTasks(listId).then((data) => setCurrentListTask(data))
    }

    let deleteTask= (task) => {
        console.log("deleteTask");
        currentListTask.indexOf(task);
        let tet = currentListTask.splice(currentListTask.indexOf(task), 1)
        setCurrentListTask(tet);       
    }

    let addTask= (task) => {

        taskApi.createTask(task).then(response => response.json()).then(task__ => taskApi.getOpenTasks(task__.taskListId).then((data) => setCurrentListTask(data)));
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
