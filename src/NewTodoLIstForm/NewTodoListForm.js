import {useDispatch} from "react-redux";
import {addTaskList} from "../store/dashboard/addTaskListAction";

const NewTodoListForm = () => {
    const dispatch = useDispatch();

    const onClickAdd = (event) => {
        event.preventDefault();
        dispatch(addTaskList(event.target.title.value));
    };

    return (
        <form onSubmit={onClickAdd} name="taskForm" id="addForm">
            <input className='item' type="text" name="title"  placeholder="Enter list title" required/>
            <button type="submit">Add list</button>
        </form>
    );
};
export default NewTodoListForm ;