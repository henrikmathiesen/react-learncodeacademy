import React        from 'react';
import { Link }     from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Henry News</h1>
                <Link to="archives">Archives</Link>
                <span>&nbsp; </span>
                <Link to="settings"><button class="btn btn-success">Settings</button></Link>
            </div>

        );
    }
}