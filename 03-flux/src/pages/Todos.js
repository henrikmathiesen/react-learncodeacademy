import React from 'react';
import Todo from '../components/Todo';

export default class Todos extends React.Component {
    constructor(){
        super();

        this.state = {
            todos: [
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