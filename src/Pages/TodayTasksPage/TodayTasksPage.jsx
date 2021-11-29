import taskApi from "../../Api/TaskListApi";
import ShowTodayTasks from "./ShowTodayTask";
import {useState} from "react";
const TodayTasksPage = () => {

    const [collectionToday, setCollectionToday] = useState([]);
    taskApi.getTodayTasks().then((data) => setCollectionToday(data));
    return (
        <div>
            <ShowTodayTasks currentList = {collectionToday}/>
        </div>
    )
}
export default TodayTasksPage