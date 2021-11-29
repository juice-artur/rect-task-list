import './App.css';
import {Route, Link, Routes} from 'react-router-dom'
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";

import TodoListPage from "./Pages/TodoListPage/TodoListPage";
import TodayTasksPage from "./Pages/TodayTasksPage/TodayTasksPage";
function App() {
    /*const [lists, setLists] = useState([]);
    const [currentListTask, setCurrentListTask] = useState([]);
    const [currentListId, setCurrentListId] = useState();
    
    
    useEffect(() => {
        taskApi.getDashboard().then((data) => setLists(data.lists));
        console.log("seEffect")
    }, []);
    
    
    let changeCurrentListTask= (listId, id) => {
        console.log("changeCurrentListTask"+ JSON.stringify(id));
        taskApi.getOpenTasks(listId).then((data) => setCurrentListTask(data));
        setCurrentListId(id);
    }
    
    let changeState = (task) => {
        console.log(currentListId);
        taskApi.patchTask(task, currentListId)
            .then(() => taskApi.getOpenTasks(currentListId)
                .then((data) => setCurrentListTask(data)))
            .then(() => setCurrentListId(currentListId))
            .then(() => taskApi.getDashboard()
                .then((data) => setLists(data.lists)));
    }

    let deleteTask= (taskId) => {
        console.log("deleteTask");
        console.log(taskId);
        console.log(currentListId);
        taskApi.deleteTask(taskId)
            .then(() => taskApi.getOpenTasks(currentListId)
                .then((data) => setCurrentListTask(data)))
            .then(() => setCurrentListId(currentListId))
            .then(() => taskApi.getDashboard()
                .then((data) => setLists(data.lists)));
    }
    

    let addTask= (task) => {
        console.log("id is: "+ currentListId);
        taskApi.createTask(task, currentListId)
            .then(response => response.json())
            .then(task__ => taskApi.getOpenTasks(task__.taskListId)
                .then((data) => setCurrentListTask(data)))
            .then(() => setCurrentListId(currentListId))
            .then(() => taskApi.getDashboard()
                .then((data) => setLists(data.lists)));
        
    }*/
    
    
  return (
    <div className="App">
        <div className="main-info">
            <TodoListSidebar/>
            <Routes>
                <Route  path={'/todo-list/:id'} element={<TodoListPage/>}/>
                <Route  path={'/today'} element={<TodayTasksPage/>}/>
            </Routes>
        </div>
    </div>
  );

}
export default App;
