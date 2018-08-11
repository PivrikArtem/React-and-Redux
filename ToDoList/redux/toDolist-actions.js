export const c = {
    
    PUT_TASKS: 'PUT_TASKS',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}

export const putTasksAction = (tasks) => {
    return {
        type: c.PUT_TASKS,
        tasks: tasks
    }
}

export const clearCompleted = (ArrayTasks) => {
    return {
        type: c.CLEAR_COMPLETED,
        tasks: ArrayTasks
    }
}