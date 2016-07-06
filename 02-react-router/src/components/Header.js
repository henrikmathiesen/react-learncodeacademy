import React                    from 'react';
import { Link }                 from 'react-router';

export default class Layout extends React.Component {
    goBack() {
        //console.log(this.props.routeArgs);
        this.props.routeArgs.history.goBack();                      // deprecated but we use it for now
        //this.props.routeArgs.history.pushState(null, "/");        // deprecated but we use it for now
        //this.props.routeArgs.history.replaceState(null, "/");     // creates no history, deprecated but we use it for now
    }

    render() {
        const {history} = this.props.routeArgs;
        const {location} = this.props.routeArgs;

        const archivesIsActive = location.pathname.match(/^\/archives/) !== null;
        console.log("history.isActive: " + history.isActive('archives'));
        console.log("archivesIsActive: " + archivesIsActive);

        return (
            <div class="col-sm-12">
                <h1>Henry News</h1>
                <Link to="archives" activeClassName="test">Archives</Link>
                <span>&nbsp; </span>
                <Link to="settings" activeClassName="test"><button class="btn btn-success">Settings</button></Link>
                <span>&nbsp; </span>
                <button onClick={this.goBack.bind(this) }>Back</button>
            </div>
        );
    }
}