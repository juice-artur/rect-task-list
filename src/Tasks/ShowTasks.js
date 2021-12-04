import Task from "./Task";
import "./ShowTasks.css"
import {useSelector} from "react-redux"; 

const ShowTasks = (props) => {
    let list = props.currentList;
    const isOpen = useSelector(state => state.onlyOpen.onlyOpen)
    let toShow = list;
    if(isOpen === true)
    {
        toShow = toShow.filter(t => t.done ===false)
    }

    return (
        <div className='format-task-to-show'>
                {toShow.map(tl => <Task key={tl.id} task={tl}/>)}
        </div>
    )
}
export default  ShowTasks;