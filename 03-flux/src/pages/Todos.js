import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
    constructor(){
        super();

        this.state = {
            todos: TodoStore.getAll()
        };        
    }

    componentWillMount(){
        TodoStore.on('change', () => {
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }

    createTodo(){
        TodoActions.createTodo(Date.now().toString());
    }

    reloadTodos(){
        TodoActions.reloadTodos();
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} id={todo.id} text={todo.text} complete={todo.complete} />
        });

        return (
            <div>
                <h2>Todos</h2>
                <ul>{TodoComponents}</ul>
                <div>
                    <button onClick={this.createTodo.bind(this)}>create todo</button>
                </div>
                <div>
                    <button onClick={this.reloadTodos.bind(this)}>Reload</button>
                </div>
            </div>
        );
    }
}