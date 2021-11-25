import Task from "./Task";
import "./ShowTasks.css" 

const ShowTasks = (props) => {
    let list = props.currentList;
    return (
        <div className='format-task-to-show'>
            {list.map(tl => <Task task={tl}/>)}
        </div>
    )
}
export default  ShowTasks;