import React, { useState, useEffect } from 'react';
import { Card, Button } from '../';
import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbUpOutline } from '@mdi/js';

export default props => {
    return props.posts.map(post => {
        return (
            <Card className="post" key={post.id}>
                <div className="profile">
                    <div className="profile-pic"></div>
                    <div className="post-info">
                        <p className="post-user info">{post.user.user}</p>
                        <p className="info">{post.createdAt}</p>
                    </div>
                </div>
                <div className="post-content">
                    <p className="post-text">{post.text}</p>
                </div>
                <div className="post-status">
                    <p>12 flikes</p>
                    <p>0 comments</p>
                </div>
                <div className="post-footer">
                    <Icon
                        className="icon"
                        path={mdiThumbUpOutline}
                        size={0.7}
                        color="#303030"
                    />
                </div>
            </Card>
        );
    });
};
