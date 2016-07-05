import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Item from './Item';

export default class Layout extends React.Component {
    constructor() {
        super(); // must call super here
        this.foo = "bar";

        // state is one way of handling data set it inital in the constructor, when state changes then the DOM will update
        // use state instead of variables scattered about
        // use state if it only affects the particular element and is not shared
        // if something is shared, use props instead
        this.state = {
            name: "Henke"
        };
    }

    changeTitle(name) {                                                                // We inject this to header and bind this so it gets called in this context
        this.setState({ name });                                                       // es6 shorthand for { name:name }
    }

    getVal(n) {
        return n + 2;
    }

    render() {
        const name = "Adam";
        var items = [<Item key="1" />, <Item key="2" />, <Item key="3" />];             // key is good practice says docs https://facebook.github.io/react/docs/multiple-components.html#dynamic-children

        // setTimeout(() => {
        //     this.setState({ name: "Benke" });                                        // set state, this seem to conflict with state change in input box
        // }, 2000);

        return (                                                                        // inject a prop into header elements, Header then passes them through to Title
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={name} />
                <Header title={"Bertil"} />
                <Header title={this.state.name} />
                <div>
                    {items}
                </div>
                <div>
                    {this.getVal(2) }
                </div>
                <div>
                    {this.state.name}
                </div>
                <Footer/>
            </div>
        );
    }
}