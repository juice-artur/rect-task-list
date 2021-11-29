import taskApi from "../../Api/TaskListApi";
import ShowTodayTasks from "./ShowTodayTask";
import {useEffect, useState} from "react";
const TodayTasksPage = () => {

    const [collectionToday, setCollectionToday] = useState([]);
    
    useEffect(() => {
        taskApi.getTodayTasks().then((data) => setCollectionToday(data))
    },[])

    let deleteTask = (task) => {
        taskApi.deleteTask( task.taskId)
            .then(() => taskApi.getTodayTasks().then((data) => setCollectionToday(data)));
    }

    let changeState = (task) => {
        taskApi.patchTask(task)
            .then(() => taskApi.getTodayTasks().then((data) => setCollectionToday(data)));
    }
    
    return (
        <div>
            <ShowTodayTasks currentList = {collectionToday} deleteTask ={deleteTask} changeState={changeState}/>
        </div>
    )
}
export default TodayTasksPage