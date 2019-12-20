import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoaderContext } from '../../config/context';
import { Card, Button } from '../../components';
import Icon from '@mdi/react';
import { mdiMenuDown, mdiPencil } from '@mdi/js';

export default ({ data }) => {
    const { setLoader } = useContext(LoaderContext);

    return (
        <div className="main">
            <Card className="profile-info">
                <div className="profile-pic">
                    <img
                        alt="profile-img"
                        className="profile-base64"
                        src={data.profilePic}
                    />
                    <Link to={`/dashboard/edit`}>
                        <Button onClick={() => setLoader('active')}>
                            <Icon path={mdiPencil} size={0.7} color="#ffffff" />
                        </Button>
                    </Link>
                </div>
                <div className="profile-information">
                    <h1 className="name">{data.name}</h1>
                    <h1 className="user">@{data.user}</h1>
                    <p className="bio">{data.bio}</p>
                </div>
            </Card>
            <Card className="profile-actions">
                <div className="profile-options">
                    <p>Options</p>
                    <Icon path={mdiMenuDown} size={0.7} color="#ffffff" />
                </div>
                <div className="profile-stats">
                    <div className="wrapper">
                        <h1>320</h1>
                        <p>posts</p>
                    </div>
                    <div className="grayline"></div>
                    <div className="wrapper">
                        <h1>1230</h1>
                        <p>followers</p>
                    </div>
                    <div className="grayline"></div>
                    <div className="wrapper">
                        <h1>30</h1>
                        <p>following</p>
                    </div>
                </div>
                <div className="profile-feed"></div>
            </Card>
        </div>
    );
};
