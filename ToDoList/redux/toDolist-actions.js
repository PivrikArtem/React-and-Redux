export const c = {

    PUT_TASKS: 'PUT_TASKS',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
    SHOW_LOADING_GIF: 'SHOW_LOADING_GIF'
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