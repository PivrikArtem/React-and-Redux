import { c } from './toDolist-actions';
export function toDoListReducer(oldState, action) {
    switch (action.type) {

        case c.PUT_TASKS:
            return {
                ...oldState,
                tasks: [...oldState.tasks, ...action.tasks]
            }

        case c.CLEAR_COMPLETED:
            return {
                ...oldState,
                tasks: [...oldState.tasks.filter(t => !t.isDone)]
            }

        case c.SHOW_LOADING_GIF:
            return {
                ...oldState,
                tasks: [...action.tasks]
            }

        case c.CHANG_FILTER:
            return {
                ...oldState,
                filter: action.value
            }

        case c.CREATE_NEW_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks, action.task]
            }
        case c.DELETE_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks.filter((t) => { return t.id !== action.taskId })]

            }
        case c.UPDATE_TASK:
            var newState = { ...oldState };
            newState.tasks = [...newState.tasks];
            newState.tasks.forEach((t, index) => {
                if (t.id === action.id) {
                    newState.tasks[index] = {
                        ...t,
                        isDone: action.isDone,
                        title: action.title
                    }
                }
            })


        default:
            if (!!oldState) {
                return oldState;
            }
            return {
                tasks: [],
                filter: 'all'
            };
    }
}