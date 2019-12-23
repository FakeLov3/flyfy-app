import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Switch, Route } from 'react-router-dom';
import { Header, Sidebar, Friends } from '../../components';
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
                <Sidebar data={data} />
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route exact path="/settings" component={Edit} />
                    <Route exact path="/user/:user" component={Profile} />
                </Switch>
                <Friends />
            </div>
        </div>
    );
};
