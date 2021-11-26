import {useState} from "react";

const Task = (props) => {
    let task = props.task;
    const [x, setX] = useState(task);
    
    let soldCheckbox = (event)=> {
        console.log(event.target.checked);
        setX({...task, done: event.target.checked});
    } 
    
    return (
        <div className="task-to-output">
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" defaultChecked={x.done} onChange={soldCheckbox}/>
                <p>{x.title}</p>
                <button className='remove-button' onClick={props.deleteTask}> Delete task </button>
            </div>
            <div className="desc">
                <p >{x.description}</p>
            </div>
            <div className="date">
                <p>{x.dueDate}</p>
            </div>
        </div>
    )
};
export default  Task;