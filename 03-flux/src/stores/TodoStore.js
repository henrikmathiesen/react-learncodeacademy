import { EventEmitter } from 'events'; // this comes nativly from node
import dispatcher from '../Dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.todos =
            [
                {
                    id: 1,
                    text: "Bring out the gimp",
                    complete: false
                },
                {
                    id: 2,
                    text: "There should be an equal ammount of blue berries in each muffin",
                    complete: true
                },
                {
                    id: 3,
                    text: "Look under the bed",
                    complete: false
                }
            ]
    }

    getAll() {
        return this.todos;
    }

    createTodo(text) {
        var id = this.todos[this.todos.length - 1].id + 1;
        const todo = {
            id: id,
            text: text,
            complete: false
        }

        this.todos.push(todo);
        this.emit('change');
    }

    gotTodos(todos) {
        console.log(todos);
        this.emit('change');
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_TODO":
                this.createTodo(action.text);
                break;
            case "FETCH_TODOS":
                this.emit('fetch');
                break;
            case "GOT_TODOS":
                this.gotTodos(action.todos);
                break;
        }
    }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

// debug for creating todos in console
//window.todoStore = todoStore;
window.dispatcher = dispatcher;

export default todoStore;

// Why create one instance and return it when imported? Wouldnt static members be better?
