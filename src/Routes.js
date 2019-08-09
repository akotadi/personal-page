import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AwardsPage } from './pages/AwardsPage';
import ErrorNotFoundPage from './pages/ErrorNotFoundPage';

class Routes extends Component {
    render() {
        return (
            <Switch>                
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/awards" component={AwardsPage} />

                <Route component={ErrorNotFoundPage} />
            </Switch>
        );
    }
}

export default Routes;
