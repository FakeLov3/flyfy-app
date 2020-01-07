import React, { useState, useEffect, useContext, useRef } from 'react';
import { FeedContext } from '../../config/context';
import api from '../../services/api';
import { CreatePost, Suggestions } from '../';
import Posts from './Posts';
import './Feed.scss';

const isMobile = window.innerWidth < 768;

export default props => {
    const [offset, setOffset] = useState(0);
    const [feed, setFeed] = useContext(FeedContext);
    const [status, setStatus] = useState('oxe');

    const feedRef = useRef(null);
    const overload = useRef(false);

    const { limit, posts } = feed;

    useEffect(() => {
        getFeedPosts();
        return () => (window.onscroll = null);
        // eslint-disable-next-line
    }, []);

    const getFeedPosts = () => {
        setStatus('loading');
        api.get(`/feed/${offset}`)
            .then(({ data }) => {
                console.log(data);
                setStatus('success');
                overload.current = data.length < limit || data.length === 0;
                if (data.length > 0) {
                    setOffset(offset => offset + limit);
                    setFeed(feed => ({
                        ...feed,
                        posts: [...posts, ...data],
                    }));
                }
            })
            .catch(() => setStatus('error'));
    };

    const handleFeedScroll = () =>
        window.scrollY + window.innerHeight > feedRef.current.scrollHeight &&
        status !== 'loading' &&
        getFeedPosts();

    window.onscroll = () => !overload.current && handleFeedScroll();

    return (
        <>
            <div className="feed view" ref={feedRef}>
                <main className="main">
                    <CreatePost />
                    <Posts
                        posts={posts}
                        status={status}
                        overload={overload.current}
                    />
                </main>
            </div>
            {!isMobile && <Suggestions />}
        </>
    );
};
