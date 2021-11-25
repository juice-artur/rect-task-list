import './App.css';
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";
import ShowTasks from "./Tasks/ShowTasks";
import {useEffect, useState} from "react";
import taskApi from "./Api/TaskListApi"; 
function App() {
    const [lists, setLists] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    
    useEffect(() => {
        taskApi.getTaskLists().then((data) => setLists(data));
    }, []);

/*    useEffect(() => {
        taskApi.getOpenTasks(1).then((data) => setCurrentList(data));
    }, []);*/
    
    let changeList = (listId) => {
        taskApi.getOpenTasks(listId).then((data) => setCurrentList(data));
        console.log("Niger i am here");
    }
    
  return (
    <div className="App">
        <div className="main-info">
            <TodoListSidebar lists={lists} changeListHandler={changeList}/>
            <ShowTasks currentList = {currentList}/>
        </div>
    </div>
  );
}

export default App;
