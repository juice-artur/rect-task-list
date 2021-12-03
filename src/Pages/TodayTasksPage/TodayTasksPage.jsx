import ShowTodayTasks from "./ShowTodayTask";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTodayTasks} from "../../store/colectionToday/collectionAction";

const TodayTasksPage = () => {
    const dispatch = useDispatch();
    const collectionToday = useSelector(state => state.tasksToday.tasksToday)

    useEffect(()=> dispatch(loadTodayTasks()), [dispatch]);
    
    return (
        <div>
            <ShowTodayTasks currentList = {collectionToday}/>
        </div>
    )
}
export default TodayTasksPage