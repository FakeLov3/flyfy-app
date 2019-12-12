import React, { useState, useEffect, useContext } from 'react';
import { FeedContext } from '../../config/context';
import api from '../../services/api';
import { CreatePost } from '../';
import Posts from './Posts';
import './Feed.scss';

export default props => {
    const [feed, setFeed] = useContext(FeedContext);
    const [status, setStatus] = useState('loading');
    const { posts } = feed;

    useEffect(() => {
        api.get('/feed')
            .then(({ data }) => {
                console.log(data);
                setStatus('success');
                setFeed(feed => ({ ...feed, posts: data }));
            })
            .catch(error => {
                setStatus('error');
                console.error(error);
            });
    }, []);

    return (
        <div className="feed">
            <main className="main">
                <CreatePost />
                <Posts posts={posts} status={status} />
            </main>
        </div>
    );
};
