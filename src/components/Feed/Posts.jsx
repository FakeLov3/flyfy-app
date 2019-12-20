import React from 'react';
import triangle from '../../assets/images/triangle.svg';
import Post from './Post';

export default ({ posts, status, overload }) => (
    <div className={`posts ${status} overload-${overload}`}>
        <p className="recent-posts">Recent posts</p>
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
        <img alt="loader" src={triangle} className="lil-loader" />
        <p className="bottom-reached">Bottom reached</p>
    </div>
);
