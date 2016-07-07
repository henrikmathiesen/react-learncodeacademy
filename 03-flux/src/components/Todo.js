import React from 'react';

export default class Todo extends React.Component { 
    render() {
        const {id, text, complete} = this.props;
        const todoCompleteClass = complete ? 'text-warning' : 'text-danger';

        return (
            <li id={'todo-' + id} class={todoCompleteClass}>
                <span>{text}</span>
            </li>
        );
    }
}