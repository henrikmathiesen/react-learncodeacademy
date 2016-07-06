import React        from 'react';
import Header       from '../components/Header'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header routeArgs={this.props} />
                {this.props.children}
            </div>
        );
    }
}