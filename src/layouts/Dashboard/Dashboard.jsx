import React from 'react';
import { Header, Button, Bar, Feed, Friends, Card } from '../../components';
import './Dashboard.scss';

export default props => {
    return (
        <div className="layout dashboard">
            <Header />
            <div className="content">
                <Bar />
                <Feed></Feed>
                <Friends />
            </div>
        </div>
    );
};
