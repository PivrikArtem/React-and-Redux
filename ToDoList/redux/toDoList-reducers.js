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
                tasks:[...action.tasks]
            }

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