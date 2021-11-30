import taskApi from "../../Api/TaskListApi";
import ShowTodayTasks from "./ShowTodayTask";
import {useEffect, useState} from "react";
const TodayTasksPage = () => {

    const [collectionToday, setCollectionToday] = useState([]);
    
    useEffect(() => {
        taskApi.getTodayTasks().then(setCollectionToday)
    },[])

    let deleteTask = (task) => {
        taskApi.deleteTask(task.taskId)
            .then(() =>setCollectionToday(collectionToday.filter(t => t.taskId !== task.taskId)));
    }

    let changeState = (task) => {
        taskApi.patchTask(task)
            .then(() => collectionToday.map(_task => task.id === _task.id ? _task = task : _task))
            .then(setCollectionToday);
    }
    
    return (
        <div>
            <ShowTodayTasks currentList = {collectionToday} deleteTask ={deleteTask} changeState={changeState}/>
        </div>
    )
}
export default TodayTasksPage