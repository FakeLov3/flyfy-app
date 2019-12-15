import React, { useState } from 'react';
import { FeedContext } from '../../config/context';
import { Header, Feed, Friends } from '../../components';
import './Dashboard.scss';

export default props => {
    const [feed, setFeed] = useState({ posts: [], limit: 10 });

    return (
        <div className="layout dashboard">
            <Header />
            <div className="content">
                <Friends />
                <FeedContext.Provider value={[feed, setFeed]}>
                    <Feed />
                </FeedContext.Provider>
            </div>
        </div>
    );
};
