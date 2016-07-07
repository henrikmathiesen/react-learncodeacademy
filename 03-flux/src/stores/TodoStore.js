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

    static getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore();
export default todoStore;

// Why create one instance and return it when imported? Wouldnt static members be better?