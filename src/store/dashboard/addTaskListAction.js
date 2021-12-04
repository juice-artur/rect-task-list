import taskApi from "../../Api/TaskListApi";
import {ADD_TODOLIST} from "../actions/types";

export const addTaskList = (listTitle) => dispatch => {
    taskApi.createTodoList({
        title: listTitle
    })
        .then(todoList => dispatch({
            type: ADD_TODOLIST,
            payload: todoList
        }))
};