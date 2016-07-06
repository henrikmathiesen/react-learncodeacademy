import React from 'react';

import Utils from '../utils/Utils';
import Article from '../components/Article';

export default class Featured extends React.Component {
    render() {

        const Articles = [
            "About Adam",
            "Bertils beginnings",
            "Ceasars new Sallad",
            "David and Goliath"
        ].map((title, i) => <Article key={i} title={title} />);

        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4"
        ];

        const randomAddNr = Utils.getRandomIntFromInterval(0, (adText.length - 1));
        const randomAdd = adText[randomAddNr];

        return (
            <div class="col-sm-12">
                <h2><mark>Featured</mark></h2>
                <div class="well text-center">
                    {randomAdd}
                </div>
                <div class="row">{Articles}</div>
            </div>
        );
    }
}