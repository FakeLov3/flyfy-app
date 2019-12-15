import React, { useState } from 'react';
import { Card } from '../';
import api from '../../services/api';
import Icon from '@mdi/react';
import { /*mdiThumbUp,*/ mdiThumbUpOutline, mdiMessageOutline } from '@mdi/js';

export default ({ post }) => {
    const [reactions, setReactions] = useState(post.reactions || []);
    const [comments /*, setComments*/] = useState(post.comments || []);

    const handlePostLike = id => {
        api.post('/likePost', {
            post: id,
        })
            .then(({ data }) => {
                setReactions(reactions => [...reactions, data]);
            })
            .catch(error => console.error(error));
    };

    return (
        <Card className="post">
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
                <p>{reactions.length} likes</p>
                <p>{comments.length} comments</p>
            </div>
            <div className="post-footer">
                <div className="action" onClick={() => handlePostLike(post.id)}>
                    <Icon path={mdiThumbUpOutline} size={0.7} color="#303030" />
                </div>

                <div className="action">
                    <Icon path={mdiMessageOutline} size={0.7} color="#303030" />
                </div>
            </div>
        </Card>
    );
};
