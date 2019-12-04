import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Auth } from './layouts';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Auth} />
        </Switch>
    </Router>
);
