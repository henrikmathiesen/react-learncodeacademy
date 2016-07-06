import React    from 'react';

export default class Archives extends React.Component {
    render() {
        console.log(this.props.location.query);

        const {query} = this.props.location;
        const {date, filter} = query;
        const {params} = this.props;
        const {article} = params;

        return (
            <div>
                <h2>Archives ({article}) </h2>
                <h3>{date}, {filter}</h3>
            </div>
        );
    }
}