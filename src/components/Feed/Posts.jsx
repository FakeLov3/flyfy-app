import React, { useState, useEffect } from 'react';
import triangle from '../../assets/images/triangle.svg';
import Post from './Post';

export default ({ posts, status }) => {
    return (
        <div className={`posts ${status}`}>
            {status === 'loading' ? (
                <img alt="loader" src={triangle} className="lil-loader" />
            ) : (
                <>
                    <p className="recent-posts">Recent posts</p>
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </>
            )}
        </div>
    );
};
