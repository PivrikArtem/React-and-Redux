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
                tasks: oldState.filter((t)=>{t.isDone})
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