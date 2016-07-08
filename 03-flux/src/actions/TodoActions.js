import dispatcher from '../Dispatcher';
import axios from 'axios';

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

export function reloadTodos() {
    dispatcher.dispatch({
        type: "FETCH_TODOS"
    });

    axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            dispatcher.dispatch({
                type: "GOT_TODOS",
                todos: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });

}