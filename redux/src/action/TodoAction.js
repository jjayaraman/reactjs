/** Todo Action  */

// Action types
export const ADD_TODO = 'AddTodoAction';
export const EDIT_TODO = 'EditTodoAction';
export const DELETE_TODO = 'DeleteTodoAction';

// Action
export default class TodoAction {

    createTodo = (todo) => {
        return { type: ADD_TODO, todo: todo }
    }

    deleteTodo = (todo) => {
        return { type: DELETE_TODO, todo: todo }
    }
}
