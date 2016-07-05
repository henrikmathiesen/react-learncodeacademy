import React from 'react';

export default class Layout extends React.Component {
    constructor(){
        super(); // must call super here
        this.foo = "bar";
    }

    getVal(n){
        return n + 2; 
    }

    render() {
        const name = "Adam";
        return (
            <div>
                <h2>It is working!</h2>
                <h2>It is working!</h2>
                <h2>{name} {3+2}</h2>
                <h2>{ this.getVal(2) }</h2>
                <h2>{this.foo}</h2>
            </div>
        );
    }
}