import React from 'react';
import { Card, Button } from '../../components';
import api from '../../services/api';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiMenuDown } from '@mdi/js';

export default ({ data }) => {
    const { followsSessionUser, followedBySessionUser } = data.relationship;
    const postCount = data.posts[0].count;

    const follow = () => {
        api.post('/follow', {
            following: data.user,
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="main">
            <Card className="profile-info">
                <div className="profile-pic">
                    <img
                        alt="profile-img"
                        className="profile-base64"
                        src={data.profilePic || noProfilePic}
                    />
                </div>
                <div className="profile-information">
                    <h1 className="name">{data.name}</h1>
                    <h1 className="user">@{data.user}</h1>
                    <Button onClick={follow} className="follow">
                        {followedBySessionUser ? (
                            <>Unfollow</>
                        ) : followsSessionUser && !followedBySessionUser ? (
                            <>Follow back</>
                        ) : (
                            <>Follow</>
                        )}
                    </Button>
                    {data.bio && <p className="bio">{data.bio}</p>}
                </div>
            </Card>
            <Card className="profile-actions">
                <div className="profile-options">
                    <p>Options</p>
                    <Icon path={mdiMenuDown} size={0.7} color="#ffffff" />
                </div>
                <div className="profile-stats">
                    <div className="wrapper">
                        <h1>{postCount}</h1>
                        <p>{postCount === 1 ? 'post' : 'posts'}</p>
                    </div>
                    <div className="grayline"></div>
                    <div className="wrapper">
                        <h1>{data.followedBy.length}</h1>
                        <p>
                            {data.followedBy.length === 1
                                ? 'follower'
                                : 'followers'}
                        </p>
                    </div>
                    <div className="grayline"></div>
                    <div className="wrapper">
                        <h1>{data.follows.length}</h1>
                        <p>following</p>
                    </div>
                </div>
                <div className="profile-feed"></div>
            </Card>
        </div>
    );
};
