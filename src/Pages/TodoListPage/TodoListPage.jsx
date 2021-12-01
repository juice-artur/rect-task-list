import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import taskApi from "../../Api/TaskListApi";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";
import {loadTasks} from "../../store/tasks/tasksAction";
import {useDispatch, useSelector} from "react-redux";

const TodoListPage = () => {
    
    const params = useParams();
    const [tasks, setTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    useEffect(()=> dispatch(loadTasks(params.id, isOpen)), [dispatch, params.id, isOpen]);
    const tt= useSelector(state => state.tasks.tasks)
    
    useEffect(() => {
        taskApi.getOpenTasks(params.id, isOpen).then(setTasks);
    }, [params.id, isOpen]);

    let deleteTask= (taskId) => {
        taskApi.deleteTask(taskId)
            .then(() =>setTasks(tasks.filter(t => t.id !== taskId)));
    }

    let changeState = (task) => {
        taskApi.patchTask(task)
            .then(() => tasks.map(_task => task.id === _task.id ? _task = task : _task))
                .then(setTasks);
    }


    let addTask= (task) => {
        taskApi.createTask(task, params.id).then(task => setTasks([task, ...tasks]));

    }
    
    
    return (
        <div className="test-div">

            <label>
                Only open task
                <input type="checkbox"  onClick={() => setIsOpen(!isOpen)}/>
            </label>
            <ShowTasks currentList = {tasks} deleteTask ={deleteTask} changeState={changeState}/>
            <NewTaskForm addTask ={addTask} currentListTask = {tasks}/>
        </div>
    )
}  
export default TodoListPage