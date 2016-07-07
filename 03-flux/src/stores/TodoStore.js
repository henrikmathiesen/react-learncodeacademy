import { EventEmitter } from 'events';

export default class TodoStore extends EventEmitter {
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
}

const todoStore = new TodoStore();
//window.todoStore = todoStore; // debug for creating todos in console
export default todoStore;

// Why create one instance and return it when imported? Wouldnt static members be better?