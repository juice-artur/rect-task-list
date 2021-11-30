import './App.css';
import {Route, Routes} from 'react-router-dom'
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";

import TodoListPage from "./Pages/TodoListPage/TodoListPage";
import TodayTasksPage from "./Pages/TodayTasksPage/TodayTasksPage";
function App() {
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
