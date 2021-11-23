const baseApiUrl = 'https://localhost:5001/api';
const taskApi = {
    getTaskLists()
    {
        return fetch(baseApiUrl + '/TaskList')
            .then(response => response.json())
    },


    getOpenTasks() {
        return fetch(baseApiUrl + '/TaskList/1/all-tasks')
            .then(response => response.json())
    },
    createTask(task)
    {
        task.taskListId = 1;
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
        task.taskListId = 1
        return fetch(baseApiUrl + `/Task/${task.id}`,{
            method : 'PATCH',
            headers:
                {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(task)
        })
    },

    deleteTask(task)
    {
        return fetch(baseApiUrl + `/Task/${task.id}`,
            {
                method: 'DELETE'
            })
    }
    
};
export default taskApi