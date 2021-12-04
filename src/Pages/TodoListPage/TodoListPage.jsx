import "./TodoListPage.css"
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import NewTaskForm from "../../NewTaskForm/NewTaskForm";
import ShowTasks from "../../Tasks/ShowTasks";
import {loadTasks} from "../../store/tasks/tasksAction";
import {useDispatch, useSelector} from "react-redux";
import {changVisible} from "../../store/tasks/VisibleAction";
import {FaArrowUp} from "react-icons/all";

const TodoListPage = () => {
    
    const params = useParams();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(()=> dispatch(loadTasks(params.id, false)), [dispatch, params.id]);
    
    
    return (
        <div className="test-div">
            <ShowTasks currentList = {tasks } listId ={params.id}/>
            <NewTaskForm listId ={params.id} currentListTask = {tasks}/>
        </div>
    )
}  
export default TodoListPage