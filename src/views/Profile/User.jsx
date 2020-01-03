import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoaderContext } from '../../config/context';
import { Card, Button } from '../../components';
import api from '../../services/api';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiMenuDown, mdiPencil } from '@mdi/js';

export default ({ data }) => {
    const { setLoader } = useContext(LoaderContext);
    const { followsSessionUser, followedBySessionUser } = data.relationship;

    const follow = () => {
        api.post('/follow', {
            following: data.user,
        })
            .then(() => window.location.reload())
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
                    {data.isUser && (
                        <Link to={`/settings`}>
                            <Button onClick={() => setLoader('active')}>
                                <Icon
                                    path={mdiPencil}
                                    size={0.7}
                                    color="#ffffff"
                                />
                            </Button>
                        </Link>
                    )}
                </div>
                <div className="profile-information">
                    <h1 className="name">{data.name}</h1>
                    <h1 className="user">@{data.user}</h1>
                    {!data.isUser && (
                        <Button onClick={follow} className="follow">
                            {followedBySessionUser ? (
                                <>Unfollow</>
                            ) : followsSessionUser && !followedBySessionUser ? (
                                <>Follow back</>
                            ) : (
                                <>Follow</>
                            )}
                        </Button>
                    )}
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
                        <h1>{data.posts.length}</h1>
                        <p>{data.posts.length === 1 ? 'post' : 'posts'}</p>
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
