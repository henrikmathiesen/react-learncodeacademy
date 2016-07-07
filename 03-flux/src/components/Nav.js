import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" activeclassName="active">Home</Link>
                <Link to="favorites" activeclassName="active">Favorites</Link>
                <Link to="settings" activeclassName="active">Settings</Link>
            </div>
        );
    }
}