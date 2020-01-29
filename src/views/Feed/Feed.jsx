import React, { useState } from 'react';
import { Feed } from '../../components';
import { FeedContext } from '../../config/context';

export default () => {
    const [feed, setFeed] = useState({ posts: [], limit: 10 });

    return (
        <FeedContext.Provider value={[feed, setFeed]}>
            <Feed />
        </FeedContext.Provider>
    );
};
