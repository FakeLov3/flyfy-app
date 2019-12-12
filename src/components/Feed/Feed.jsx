import React, { useState, useEffect, useContext } from 'react';
import { FeedContext } from '../../config/context';
import api from '../../services/api';
import { CreatePost } from '../';
import Posts from './Posts';
import './Feed.scss';

export default props => {
    const [feed, setFeed] = useContext(FeedContext);
    const { posts } = feed;

    useEffect(() => {
        api.get('/feed')
            .then(({ data }) => setFeed(feed => ({ ...feed, posts: data })))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="feed">
            <main className="main">
                <CreatePost />
                <div className="posts">
                    <p className="recent-posts">Recent posts</p>
                    <Posts posts={posts} />
                </div>
            </main>
        </div>
    );
};
