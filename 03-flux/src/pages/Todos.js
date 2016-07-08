import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
    constructor() {
        super();

        this.todoStoreChange = this.todoStoreChange.bind(this);
        this.todoStoreFetch = this.todoStoreFetch.bind(this); 

        this.state = {
            todos: TodoStore.getAll(),
            fetch: false
        };
    }

    //
    // Listen for changes and react

    todoStoreChange() {
        console.log("change - getAll()");
        this.setState({
            todos: TodoStore.getAll(),
            fetch: false
        });
    }

    todoStoreFetch() {
        console.log("fetch - show loading");
        this.setState({
            fetch: true
        });
    }

    componentWillMount() {
        TodoStore.on('change', this.todoStoreChange);
        TodoStore.on('fetch', this.todoStoreFetch);

        // A) The events gets rebound when we toggle between routes, that is NOT good
        console.log("event listener count: " + TodoStore.listenerCount('change'));
    }

    componentWillUnmount() {
        // B) So on 'componentWillUnmount' event, we unbind the events
        TodoStore.removeListener('change', this.todoStoreChange);
        TodoStore.removeListener('fetch', this.todoStoreFetch);
    }

    //
    // Fire Actions

    createTodo() {
        TodoActions.createTodo(Date.now().toString());
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} id={todo.id} text={todo.text} complete={todo.complete} />
        });

        const isFetchClass = !this.state.fetch ? 'hidden' : '';

        return (
            <div>
                <h2>Todos</h2>
                <ul>{TodoComponents}</ul>
                <div class={isFetchClass}>LOADING</div>
                <div>
                    <button onClick={this.createTodo.bind(this) }>create todo</button>
                </div>
                <div>
                    <button onClick={this.reloadTodos.bind(this) }>Reload</button>
                </div>
            </div>
        );
    }
}