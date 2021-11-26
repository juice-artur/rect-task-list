import Task from "./Task";
import "./ShowTasks.css" 

const ShowTasks = (props) => {
    let list = props.currentList;
    return (
        <div className='format-task-to-show'>
            {list.map(tl => <Task key={tl.id} task={tl} deleteTask ={props.deleteTask}/>)}
        </div>
    )
}
export default  ShowTasks;