import dispatcher from '../Dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos(){
    dispatcher.dispatch({
        type: "RELOAD_TODOS"
    });
}