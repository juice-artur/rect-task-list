import taskApi from "../../Api/TaskListApi";
import ShowTodayTasks from "./ShowTodayTask";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTodayTasks} from "../../store/colectionToday/collectionAction";
const TodayTasksPage = () => {
    const dispatch = useDispatch();
    const collectionToday = useSelector(state => state.tasksToday.tasksToday)

    useEffect(()=> dispatch(loadTodayTasks()), [dispatch]);

    let deleteTask = (task) => {
        taskApi.deleteTask(task.taskId)
            /*.then(() =>setCollectionToday(collectionToday.filter(t => t.taskId !== task.taskId)));*/
    }

    let changeState = (task) => {
        taskApi.patchTask(task)
/*            .then(() => collectionToday.map(_task => task.id === _task.id ? _task = task : _task))
            .then(setCollectionToday);*/
    }
    
    return (
        <div>
            <ShowTodayTasks currentList = {collectionToday} deleteTask ={deleteTask} changeState={changeState}/>
        </div>
    )
}
export default TodayTasksPage