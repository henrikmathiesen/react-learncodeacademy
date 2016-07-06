import React        from 'react';
import Header       from '../components/Header'

export default class Layout extends React.Component {
    render() {
        const containerStyle = {
            marginTop: '60px'
        }

        return (
            <div class="container" style={containerStyle}>
                <div class="row">
                    <div class="col-sm-12">
                        <h1>02 - React Router</h1>
                    </div>
                </div>
                <div class="row">
                    <Header routeArgs={this.props} />
                </div>
                <div class="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}