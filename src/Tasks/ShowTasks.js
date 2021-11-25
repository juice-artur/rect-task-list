import {Task} from "./Task";
import "./ShowTasks.css" 

const ShowTasks = (props) => {
    let list = props.currentList;
    return (
        <div className='format-task-to-show'>
            {list.map(tl => <Task id={tl.id} title={tl.title} done ={tl.done} description = {tl.description} dueDate = {tl.dueDate}/>)}
        </div>
    )
    

}

export default  ShowTasks;