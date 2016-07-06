import React from 'react';
import Article from '../components/Article';

export default class Archives extends React.Component {
    render() {
        console.log(this.props.location.query);

        const {query} = this.props.location;
        const {date, filter} = query;
        const {params} = this.props;
        const {article} = params;

        const noDateAndNoFilter = !date && !filter;
        const dateOrFilterOrNeither =  !date || !filter;

        const Articles = [
            "About Adam",
            "Bertils beginnings",
            "Ceasars new Sallad",
            "David and Goliath",
            "Eric Jordan",
            "Fredriks many great fishes"
        ].map((title, i) => <Article key={i} title={title} />);

        return (
            <div class="col-sm-12">
                <h2>Archives {article} </h2>
                <h3 class={ noDateAndNoFilter ? 'hidden' : '' }>{date} <span class={ dateOrFilterOrNeither ? 'hidden' : '' }>,</span> {filter}</h3>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}