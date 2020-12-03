import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./Home";
import Movie from "./components/Movie";
import Tv from "./components/Tv"

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movie/:id" component={Movie}/>
                <Route exact path="/tv/:id" component={Tv}/>
            </Switch>
        </Router>
    );
};