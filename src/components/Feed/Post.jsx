import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../services/formatters';
import { Card } from '../';
import api from '../../services/api';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiThumbUp, mdiThumbUpOutline, mdiMessageOutline } from '@mdi/js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default ({ post }) => {
    const [liked, setLiked] = useState(post.liked);
    const [reactions, setReactions] = useState(post.reactions || []);
    const [comments /*, setComments*/] = useState(post.comments || []);
    const [loading, setLoading] = useState(true);

    const handlePostLike = post => {
        api.post('/likePost', { post })
            .then(({ data }) => {
                setReactions(reactions => [...reactions, data]);
                setLiked(true);
            })
            .catch(error => console.error(error));
    };

    const likedString = `${
        liked
            ? reactions.length < 2
                ? 'You liked this'
                : reactions.length === 2
                ? `You and another person liked this`
                : `You and ${reactions.length - 1} people liked this`
            : reactions.length > 1
            ? `${reactions.length} likes`
            : reactions.length < 1
            ? `Be the first one to like this`
            : `${reactions.length} like`
    } `;

    return (
        <Card className={`post${loading ? ' loading' : ''}`}>
            <div className="profile">
                <Link to={`/user/${post.user.user}`} className="profile-pic">
                    <img
                        src={
                            post.user.profilePic
                                ? `${process.env.REACT_APP_API}/img?w=32&h=32&key=${post.user.profilePic}`
                                : noProfilePic
                        }
                        alt="profile-pic"
                        onLoad={() => setLoading(false)}
                    />
                </Link>
                <div>
                    <Link
                        style={{ color: '#303030' }}
                        to={`/user/${post.user.user}`}
                    >
                        <p className="post-user">{post.user.user}</p>
                    </Link>
                    <p className="post-date info">
                        {formatDate(post.createdAt)}
                    </p>
                </div>
            </div>
            <div className="post-content">
                {post.text.length > 0 && (
                    <p className="post-text">{post.text}</p>
                )}
                {post.images.length > 0 && (
                    <div className="post-images">
                        <Carousel
                            showIndicators={post.images.length > 1}
                            showStatus={post.images.length > 1}
                            showThumbs={false}
                            emulateTouch
                            swipeScrollTolerance={10}
                            statusFormatter={(current, total) =>
                                `${current} / ${total}`
                            }
                        >
                            {post.images.map((key, i) => (
                                <div key={i} className="image">
                                    <img
                                        src={`${process.env.REACT_APP_API}/img?w=580&key=${key.image}`}
                                        alt={`post-${i}`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
            <div className="post-status">
                <p>{likedString}</p>
                <p>
                    {comments.length === 1
                        ? `${comments.length} comment`
                        : `${comments.length} comments`}
                </p>
            </div>
            <div className="grayline"></div>
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
