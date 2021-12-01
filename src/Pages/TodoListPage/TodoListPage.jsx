import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import taskApi from "../../Api/TaskListApi";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";
import {loadTasks} from "../../store/tasks/tasksAction";
import {useDispatch, useSelector} from "react-redux";
import {TASK_STATUS_UPDATED, updateStatus} from "../../store/dashboard/updateTaskStatusAction";

const TodoListPage = () => {
    
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const tasks= useSelector(state => state.tasks.tasks)
    
    useEffect(()=> dispatch(loadTasks(params.id, isOpen)), [dispatch, params.id, isOpen]);
    
    let deleteTask= (taskId) => {
        taskApi.deleteTask(taskId)
            /*.then(() =>setTasks(tasks.filter(t => t.id !== taskId)));*/
    }

    let changeState = (task) => {
        let patchInfo = {
            id: task.id,
            listId: task.taskListId,
            done: task.done
        }
        
        dispatch(updateStatus(task,patchInfo));
        /*taskApi.patchTask(task)
            .then(() => tasks.map(_task => task.id === _task.id ? _task = task : _task))*/
                /*.then(setTasks);*/
    }


    let addTask= (task) => {
        taskApi.createTask(task, params.id).then(task => console.log("1111")/*setTasks([task, ...tasks])*/);

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