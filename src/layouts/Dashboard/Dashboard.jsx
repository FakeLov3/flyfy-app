import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Switch, Route } from 'react-router-dom';
import { Header, Friends } from '../../components';
import { Feed, Profile, Edit } from '../../views';
import './Dashboard.scss';

export default props => {
    const [data, setData] = useState({});

    useEffect(() => {
        api.get('/user')
            .then(({ data }) => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="layout dashboard">
            <Header data={data} />
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
