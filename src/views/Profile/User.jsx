import React from 'react';
import { Card, Button } from '../../components';
import Icon from '@mdi/react';
import { mdiMenuDown, mdiAccount } from '@mdi/js';

export default ({ data }) => {
    return (
        <div className="main">
            <Card className="profile-info">
                <Card className="profile-pic" />
                <div className="profile-information">
                    <h1 className="name">{data.name}</h1>
                    <h1 className="user">@{data.user}</h1>
                    <Button className="follow" label="Follow" />
                    <p className="bio">
                        Hello! My name is Gabriel and i'm a fullstack developer.
                        Node, React.js, MySQL, Git and a lot of fun! I like to
                        drink beer and i do it almost every day.
                    </p>
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
                <div className="profile-feed">
                    <Button>
                        <Icon path={mdiAccount} size={0.7} color="#ffffff" />
                        <p>Follow</p>
                    </Button>
                    <Button>
                        <Icon path={mdiAccount} size={0.7} color="#ffffff" />
                        <p>Send message</p>
                    </Button>
                </div>
            </Card>
        </div>
    );
};
