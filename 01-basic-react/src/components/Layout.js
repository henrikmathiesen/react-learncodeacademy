import React from 'react';

import Header from './Header';
import Footer from './Footer'; 
import Item from './Item';

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
        var items = [<Item key="1" />, <Item key="2" />, <Item key="3" />];             // key is good practice says docs https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        return (
            <div>
                <Header/>
                <div>
                    {items}
                </div>
                <div>
                    {this.getVal(2)}
                </div>
                <Footer/>
            </div>
        );
    }
}