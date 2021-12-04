const baseApiUrl = 'https://localhost:5001/api';
const taskApi = {
    getTodayTasks()
    {
        return fetch(baseApiUrl + '/collection/today')
            .then(response => response.json())   
    },
    
    getDashboard()
    {
        return fetch(baseApiUrl + '/Dashboard')
            .then(response => response.json())
    },
    
    
    getOpenTasks(listId, isOpen) {
        return fetch(baseApiUrl + `/TaskList/${listId}/tasks?isOpen=${isOpen}`)
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
            }).then(response => response.json())
    },
    
    createTodoList(title)
    {
        return fetch(baseApiUrl +'/TaskList',
            {
                method: 'POST',
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(title)
            }).then(response => response.json())
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
        }).then(res => res.json())
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