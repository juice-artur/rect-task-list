import TodayTask from "./TodayTask";
import "./ShowTodayTask.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodayTasks} from "../../store/colectionToday/collectionAction";

const ShowTodayTasks = () => {
    const dispatch = useDispatch();
    const collectionToday = useSelector(state => state.tasksToday.tasksToday)

    useEffect(()=> dispatch(loadTodayTasks()), [dispatch]);
    
    return (
        <div className='format-task-to-show'>
            {collectionToday.map(tl => <TodayTask key={tl.id} task={tl}/>)}
        </div>
    )
}
export default  ShowTodayTasks;