import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";
import {loadTasks} from "../../store/tasks/tasksAction";
import {useDispatch, useSelector} from "react-redux";
import {changVisible} from "../../store/tasks/VisibleAction";

const TodoListPage = () => {
    
    const params = useParams();
    const isOpen = useSelector(state => state.onlyOpen.onlyOpen) 

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks)
    let testF = () =>
    {
        dispatch(changVisible(isOpen));
    }
    useEffect(()=> dispatch(loadTasks(params.id, false)), [dispatch, params.id]);
    
    
    return (
        <div className="test-div">

            <label>
                Only open task
                <input type="checkbox"  onClick={testF}/>
            </label>
            <ShowTasks currentList = {tasks }/>
            <NewTaskForm listId ={params.id} currentListTask = {tasks}/>
        </div>
    )
}  
export default TodoListPage