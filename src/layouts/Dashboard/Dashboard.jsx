import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Header, Bar, Feed, Friends } from '../../components';
import './Dashboard.scss';

export default props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts')
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error(error));
    }, []);

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
