import "./NewTaskForm.css"
class MyTask {
    constructor(title, description, dueDate, tl) 
    {
            this.taskListId = tl;
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.done = false;
    }
}

const NewTaskForm = (props) => {
    const onClickAdd = (event) => {
        event.preventDefault();
        props.addTask(new MyTask(event.target.title.value, event.target.description.value, event.target.dueDate.value, 1))
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