const TodayTask = (props) => {
    let task = props.task;
    console.log("this: " + task)
    return (
        <div className="task-to-output">
            <div className="task-list-title">
                <p>{task.list.title}</p>
            </div>
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" defaultChecked={task.done}/>
                <p>{task.title}</p>
                <button className='remove-button'> Delete task </button>
            </div>
            <div className="desc">
                <p >{task.description}</p>
            </div>
            <div className="date">
                <p>{task.dueDate}</p>
            </div>
        </div>
    )
};
export default  TodayTask;