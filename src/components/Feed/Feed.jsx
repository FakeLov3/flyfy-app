import React, { useState, useEffect, useContext, useRef } from 'react';
import { FeedContext } from '../../config/context';
import api from '../../services/api';
import { CreatePost } from '../';
import Posts from './Posts';
import './Feed.scss';

export default props => {
    const [offset, setOffset] = useState(0);
    const [overload, setOverload] = useState(false);
    const [feed, setFeed] = useContext(FeedContext);
    const [status, setStatus] = useState('loading');
    const feedRef = useRef(null);
    const { limit, posts } = feed;

    useEffect(() => {
        handleFeedScroll();
        // // eslint-disable-next-line
    }, []);

    const getFeedPosts = () => {
        setStatus('loading');
        api.get(`/feed/${offset}`)
            .then(({ data }) => {
                setStatus('success');
                setOverload(data.length < limit || data.length === 0);
                if (data.length > 0) {
                    setOffset(offset => offset + limit);
                    setFeed(feed => ({ ...feed, posts: [...posts, ...data] }));
                }
            })
            .catch(() => setStatus('error'));
    };

    const handleFeedScroll = () => {
        let { scrollTop } = feedRef.current,
            bottom =
                feedRef.current.scrollHeight -
                feedRef.current.offsetHeight -
                50;
        scrollTop >= bottom && getFeedPosts();
    };

    return (
        <div
            onScroll={() => !overload && handleFeedScroll()}
            className="feed"
            ref={feedRef}
        >
            <main className="main">
                <CreatePost />
                <Posts posts={posts} status={status} overload={overload} />
            </main>
        </div>
    );
};
