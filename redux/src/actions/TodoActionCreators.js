import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './TodoActionTypes';

export default class TodoActionCreators {

    createTodo = (todo) => {
        return { type: ADD_TODO, todo: todo }
    }

    deleteTodo = (todo) => {
        return { type: DELETE_TODO, todo: todo }
    }
}
