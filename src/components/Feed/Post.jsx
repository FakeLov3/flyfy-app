import React, { useState } from 'react';
import { formatDate } from '../../services/formatters';
import { Card } from '../';
import api from '../../services/api';
import Icon from '@mdi/react';
import { mdiThumbUp, mdiThumbUpOutline, mdiMessageOutline } from '@mdi/js';

export default ({ post }) => {
    const [liked, setLiked] = useState(post.liked);
    const [reactions, setReactions] = useState(post.reactions || []);
    const [comments /*, setComments*/] = useState(post.comments || []);

    const handlePostLike = post => {
        api.post('/likePost', { post })
            .then(({ data }) => {
                setReactions(reactions => [...reactions, data]);
                setLiked(true);
            })
            .catch(error => console.error(error));
    };

    const handleUserProfileClick = user => {
        console.log(user);
    };

    const likedString = `${
        liked
            ? reactions.length < 2
                ? 'You liked this'
                : `You and ${reactions.length - 1} people liked this`
            : reactions.length > 1
            ? `${reactions.length} likes`
            : reactions.length < 1
            ? `Be the first one to like this`
            : `${reactions.length} like`
    } `;

    return (
        <Card className="post">
            <div className="profile">
                <div
                    onClick={() => handleUserProfileClick(post.user)}
                    className="profile-pic"
                ></div>
                <div>
                    <p
                        onClick={() =>
                            (window.location.pathname = `/dashboard/${post.user.user}`)
                        }
                        className="post-user"
                    >
                        {post.user.user}
                    </p>
                    <p className="post-date info">
                        {formatDate(post.createdAt)}
                    </p>
                </div>
            </div>
            <div className="post-content">
                <p className="post-text">{post.text}</p>
            </div>
            <div className="post-status">
                <p>{likedString}</p>
                <p>
                    {comments.length === 1
                        ? `${comments.length} comment`
                        : `${comments.length} comments`}
                </p>
            </div>
            <div className="post-footer">
                <div className="action" onClick={() => handlePostLike(post.id)}>
                    <Icon
                        path={liked ? mdiThumbUp : mdiThumbUpOutline}
                        size={0.7}
                        color="#303030"
                    />
                </div>
                <div className="action">
                    <Icon path={mdiMessageOutline} size={0.7} color="#303030" />
                </div>
            </div>
        </Card>
    );
};
