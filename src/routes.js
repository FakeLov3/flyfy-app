import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Auth, Dashboard } from './layouts';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
);
