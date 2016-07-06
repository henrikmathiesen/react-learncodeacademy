import React                                        from 'react';
import ReactDOM                                     from 'react-dom';
import { Router, Route, IndexRoute, hashHistory }   from 'react-router';

import Bootstrap                                    from 'bootstrap-without-jquery';

import Archives                                     from "./pages/Archives";
import Featured                                     from "./pages/Featured";
import Layout                                       from "./pages/Layout";
import Settings                                     from "./pages/Settings";


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}></Route>
    </Router>,
    app
);