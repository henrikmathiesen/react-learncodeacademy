import React from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor(){
        super();

        this.state = {
            todos: TodoStore.getAll()
        };        
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} text={todo.text} complete={todo.complete} />
        });

        return (
            <div>
                <h2>Todos</h2>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}