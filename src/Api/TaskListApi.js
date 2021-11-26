const baseApiUrl = 'https://localhost:5001/api';
const taskApi = {
    getTaskLists()
    {
        return fetch(baseApiUrl + '/TaskList')
            .then(response => response.json())
    },
    
    getTaskListById(listId)
    {
        return fetch(baseApiUrl + `/TaskList/${listId}`)
            .then(response => response.json())   
    },
    
    getTask()
    {
        return fetch(baseApiUrl + '/Task/22')
            .then(response => response.json())
    },


    getOpenTasks(listId) {
        return fetch(baseApiUrl + `/TaskList/${listId}/all-tasks`)
            .then(response => response.json())
    },
    
    createTask(task, id)
    {
        task.taskListId = id;
        task.dueDate = new Date(task.dueDate);
        return fetch(baseApiUrl +'/Task',
            {
                method: 'POST',
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(task)
            })
    },

    patchTask(task)
    {
        return fetch(baseApiUrl + `/Task/${task.id}`,{
            method : 'PATCH',
            headers:
                {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(task)
        })
    },

    deleteTask(taskId)
    {
        return fetch(baseApiUrl + `/Task/${taskId}`,
            {
                method: 'DELETE'
            })
    }
    
};
export default taskApi