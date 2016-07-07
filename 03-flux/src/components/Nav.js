import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
            <div class="td-nav">
                <IndexLink to="/" activeClassName="td-nav-active">Home</IndexLink>
                <Link to="favorites" activeClassName="td-nav-active">Favorites</Link>
                <Link to="settings" activeClassName="td-nav-active">Settings</Link>
            </div>
        );
    }
}