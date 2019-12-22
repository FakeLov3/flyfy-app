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
        getFeedPosts();
        // eslint-disable-next-line
    }, []);

    const getFeedPosts = () => {
        setStatus('loading');
        api.get(`/feed/${offset}`)
            .then(({ data }) => {
                console.log(data);
                setStatus('success');
                setOverload(data.length < limit || data.length === 0);
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

    const handleFeedScroll = () => {
        let { scrollTop, scrollHeight, offsetHeight } = feedRef.current;
        let bottom = scrollHeight - offsetHeight - 50;
        scrollTop >= bottom && status !== 'loading' && getFeedPosts();
    };

    return (
        <div
            onScroll={() => !overload && handleFeedScroll()}
            className="feed view"
            ref={feedRef}
        >
            <main className="main">
                <CreatePost />
                <Posts posts={posts} status={status} overload={overload} />
            </main>
        </div>
    );
};
