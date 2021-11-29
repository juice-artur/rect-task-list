import {useState} from "react";

const Task = (props) => {
    let task = props.task;
    const [x, setX] = useState(task);
    function onClickDelete() {
       props.deleteTask(task.id);
    }
    
    let soldCheckbox = (event)=> {
        x.done = !x.done;
        setX({...task, done: x.done});
        props.changeState(x)
        console.log(x);
    }
    return (
        <div className="task-to-output">
            <div className='task-head'>
                <input className="task-isDone-checkBox" type="checkbox" defaultChecked={x.done} onChange={soldCheckbox}/>
                <p>{x.title}</p>
                <button className='remove-button' onClick={onClickDelete}> Delete task </button>
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