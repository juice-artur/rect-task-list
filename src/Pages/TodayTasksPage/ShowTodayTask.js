import TodayTask from "./TodayTask";
import "./ShowTodayTask.css"

const ShowTodayTasks = (props) => {
    let list = props.currentList;
    return (
        <div className='format-task-to-show'>
            {list.map(tl => <TodayTask key={tl.taskId} task={tl}/>)}
        </div>
    )
}
export default  ShowTodayTasks;