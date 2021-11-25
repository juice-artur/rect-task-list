//TODO: Do work this function
function onClickDelete(id) {
    console.log("Test: " + {id})
}

const Task = (props) => {
    let taskListId = props.task.taskListId
    let title =  props.task.title;
    let description =  props.task.description;
    let dueDate =  props.task.dueDate;
    let done =  props.task.done;
    return (
        <div className="task-to-output">
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" checked={done} onChange={(event ) =>console.log('change' + this.state.id)}/>
                <p>{title}</p>
                {/*//TODO: Fixed input and make clickable checkbox*/}
                <button className='remove-button' onClick={(event) => onClickDelete(title)}> Delete task </button>
            </div>
            <div className="desc">
                <p >{description}</p>
            </div>
            <div className="date">
                <p>{dueDate}</p>
            </div>
        </div>
    )
};
export default  Task;