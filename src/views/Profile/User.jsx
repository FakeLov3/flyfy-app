import React from 'react';
import { Card, Button } from '../../components';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiMenuDown } from '@mdi/js';

export default ({ data }) => {
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
                    <Button className="follow" label="Follow" />
                    {data.bio ? (
                        <>
                            <div className="grayline"></div>
                            <p className="bio">{data.bio}</p>
                        </>
                    ) : (
                        <></>
                    )}
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
