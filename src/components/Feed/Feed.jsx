import React from 'react';
import { Post } from '../';
import './Feed.scss';

export default props => {
    return <div className="feed">{props.children}</div>;
};
