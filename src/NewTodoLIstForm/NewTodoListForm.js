import {useDispatch} from "react-redux";
import {addTaskList} from "../store/dashboard/addTaskListAction";
import "./NewTodoListForm.css"
import {IoAddOutline} from "react-icons/all";

const NewTodoListForm = () => {
    
    const dispatch = useDispatch();

    const onClickAdd = (event) => {
        event.preventDefault();
        dispatch(addTaskList(event.target.title.value));
        event.target.reset();
    };

    return (
        <form onSubmit={onClickAdd}  name="todo-list-Form" id="addForm">
            <input className='item' type="text" name="title"  placeholder="Enter list title" required/>
            <button className='add-list-button'  type="submit"> <IoAddOutline/> Add list</button>
        </form>
    );
};
export default NewTodoListForm ;