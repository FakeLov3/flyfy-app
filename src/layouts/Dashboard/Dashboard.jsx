import React from 'react';
import { Header, CreatePost, Bar, Feed, Friends } from '../../components';
import './Dashboard.scss';

export default props => {
    return (
        <div className="layout dashboard">
            <Header />
            <div className="content">
                <Bar />
                <Feed>
                    <CreatePost />
                </Feed>
                <Friends />
            </div>
        </div>
    );
};
