import { TODO_CREATE, REMOVE_TODO } from "../action/TodoAction";


export default class TodoReducer {

    createTodo = (state, action) => {

        switch (action.type) {
            case TODO_CREATE:
                return [...state, state.push(action.todo)]
            case REMOVE_TODO:
                return [...state, state.splice(action.todo)]
            default:
                return state;
        }
    }

}