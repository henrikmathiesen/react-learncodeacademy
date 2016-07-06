import React from 'react';

export default class Article extends React.Component { 
    render(){
        const {title} = this.props;

        return (
            <div class="col-md-4">
                <h3>{title}</h3>
                <p>Lorem ipsum dolores es sita met, consector adisi elit. Sape rem nisi velit animi lorem ipsum.</p>
                <span class="btn btn-default">Read more</span>
            </div>
        )
    }
}