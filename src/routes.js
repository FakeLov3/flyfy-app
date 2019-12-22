import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, Join, SignIn } from './layouts';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/join" component={Join} />
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>
);
