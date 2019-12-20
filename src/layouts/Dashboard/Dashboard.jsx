import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Friends } from '../../components';
import { Feed, Profile, Edit } from '../../views';
import './Dashboard.scss';

export default props => {
    return (
        <div className="layout dashboard">
            <Header />
            <div className="content">
                <Friends />
                <Switch>
                    <Route exact path="/dashboard" component={Feed} />
                    <Route exact path="/dashboard/edit" component={Edit} />
                    <Route exact path="/dashboard/:user" component={Profile} />
                </Switch>
            </div>
        </div>
    );
};
