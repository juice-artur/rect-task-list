import "./NewTaskForm.css"
import {createTask} from "../store/tasks/addTaskAction";
import {useDispatch} from "react-redux";
import {IoAddOutline} from "react-icons/all";

const NewTaskForm = (props) => {
    const dispatch = useDispatch();
    
    const onClickAdd = (event) => {
        event.preventDefault();
        let task = {taskListId : props.listId,
            title:event.target.title.value,
            description: event.target.description.value,
            dueDate:event.target.dueDate.value, 
            done: false};
        dispatch(createTask(task, props.listId));
    };
    
    return (
        <form onSubmit={onClickAdd} name="taskForm" id="addForm">
            <input className='item' type="text" name="title"  placeholder="Title" required/>
            <input className='item' type="text" name="description" placeholder="Task description"/>
            <input className='item' type="date" name="dueDate" placeholder="Deadline"/>
            <button type="submit"> <IoAddOutline/> Add task</button>
        </form>
    );
};
export default NewTaskForm;