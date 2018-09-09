export const c = {

    PUT_TASKS: 'PUT_TASKS',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
    SHOW_LOADING_GIF: 'SHOW_LOADING_GIF',
    CHANG_FILTER: 'CHANG_FILTER',
    CREATE_NEW_TASK: 'CREATE_NEW_TASK',
    DELETE_TASK: 'DELETE_TASK',
    UPDATE_TASK: 'UPDATE_TASK'


}

export const putTasksAction = (tasks) => {
    return {
        type: c.PUT_TASKS,
        tasks: tasks
    }
}

export const clearCompleted = () => {
    return {
        type: c.CLEAR_COMPLETED

    }
}

export const showLoadingGif = (ArrayTasks) => {
    return {
        type: c.SHOW_LOADING_GIF,
        tasks: ArrayTasks
    }
}

export const changeFilter = (filterValue) => {
    return {
        type: c.CHANG_FILTER,
        value: filterValue
    }
}

export const createNewTask = (task) => {
    return {
        type: c.CREATE_NEW_TASK,
        task: task
    }
}


export const deleteTask = (taskId) => {
    return {
        type: c.DELETE_TASK,
        taskId: taskId
    }
}

export const updateTask = ({ id, isDone, title }) => {
    return {
        type: c.UPDATE_TASK,
        id: id,
        isDone: isDone,
        title: title
    }
}

