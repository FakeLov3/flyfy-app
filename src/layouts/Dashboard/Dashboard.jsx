import React, { useState, useEffect } from 'react';
import { FeedContext } from '../../config/context';
import { Header, Bar, Feed, Friends } from '../../components';
import './Dashboard.scss';

export default props => {
    const [feed, setFeed] = useState({ posts: [] });

    return (
        <div className="layout dashboard">
            <Header />
            <div className="content">
                <Friends />
                <FeedContext.Provider value={[feed, setFeed]}>
                    <Feed value={feed} />
                </FeedContext.Provider>
            </div>
        </div>
    );
};
