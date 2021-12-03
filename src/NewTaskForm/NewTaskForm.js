import "./NewTaskForm.css"

const NewTaskForm = (props) => {
    const onClickAdd = (event) => {
        event.preventDefault();
        props.addTask( {taskListId : props.listId, title:event.target.title.value, description: event.target.description.value, dueDate:event.target.dueDate.value, done: false})
    };
    return (
        <form onSubmit={onClickAdd} name="taskForm" id="addForm">
            <input className='item' type="text" name="title"  placeholder="Title" required/>
            <input className='item' type="text" name="description" placeholder="Task description"/>
            <input className='item' type="date" name="dueDate" placeholder="Deadline"/>
            <button type="submit">Add task</button>
        </form>
    );
};
export default NewTaskForm;