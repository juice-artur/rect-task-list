import taskApi from "../../Api/TaskListApi";
import { DELETE_TODOLIST} from "../actions/types";

export const deleteTaskList = (listId) => dispatch => {
    taskApi.deleteTodoList(listId)
        .then(() => dispatch({
            type: DELETE_TODOLIST,
            payload: listId
        }))
};