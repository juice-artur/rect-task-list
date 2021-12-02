import taskApi from "../../Api/TaskListApi";

export const TASK_STATUS_UPDATED = 'TASK_STATUS_UPDATED'
export const updateStatus = (task) => dispatch => {
    taskApi.patchTask(task)
        .then(res => res.json())
        .then(currentTask => dispatch({
            type: TASK_STATUS_UPDATED,
            payload: {
                id: task.id,
                listId: currentTask.taskListId,
                done: currentTask.done
            }
        }))
};