import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";
import {loadTasks} from "../../store/tasks/tasksAction";
import {useDispatch, useSelector} from "react-redux";

const TodoListPage = () => {
    
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks)
    
    useEffect(()=> dispatch(loadTasks(params.id, isOpen)), [dispatch, params.id, isOpen]);
    
    
    return (
        <div className="test-div">

            <label>
                Only open task
                <input type="checkbox"  onClick={() => setIsOpen(!isOpen)}/>
            </label>
            <ShowTasks currentList = {tasks}/>
            <NewTaskForm listId ={params.id} currentListTask = {tasks}/>
        </div>
    )
}  
export default TodoListPage