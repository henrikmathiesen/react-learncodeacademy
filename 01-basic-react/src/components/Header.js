import React from 'react';

import Title from './Header/Title';

export default class Header extends React.Component {
    handleChange(e){
        this.props.changeTitle(e.target.value);
    }

    render() {
        return (
            <header>
                <Title title={this.props.title}/>
                <div><input onChange={this.handleChange.bind(this)} /></div>
            </header>
        );
    }
}