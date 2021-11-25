import './App.css';
import TodoListSidebar from "./TodoListSidebar/TodoListSidebar";
import ShowTasks from "./Tasks/ShowTasks"; 
function App() {
  return (
    <div className="App">
        <div className="main-info">
            <TodoListSidebar />
            <ShowTasks/>
        </div>
    </div>
  );
}

export default App;
