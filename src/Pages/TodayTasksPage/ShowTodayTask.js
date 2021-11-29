import TodayTask from "./TodayTask";
import "./ShowTodayTask.css"

const ShowTodayTasks = (props) => {
    let list = props.currentList;
    
    return (
        <div className='format-task-to-show'>
            {list.map(tl => <TodayTask key={tl.id} task={tl} deleteTask ={props.deleteTask} changeState ={props.changeState}/>)}
        </div>
    )
}
export default  ShowTodayTasks;