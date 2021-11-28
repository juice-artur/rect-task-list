import ShowTasks from "../Tasks/ShowTasks";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const TodoListPage = (props) => {
    return (
        <div>
            <ShowTasks currentList = {props.currentListTask} deleteTask ={props.deleteTask} changeState={props.changeState}/>
            <NewTaskForm addTask ={props.addTask} currentListTask = {props.currentListTask}/>
        </div>
    )
}  
export default {TodoListPage} 