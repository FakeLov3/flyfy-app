import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card, Button } from '../../components';
import Icon from '@mdi/react';
import { mdiFileImage } from '@mdi/js';
import './Profile.scss';

export default props => {
    const [data, setData] = useState({});
    const { user } = props.match.params;

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        api.get(`user/${user}`)
            .then(({ data }) => setData(data))
            .catch(error => console.error(error));
    };

    return (
        <div className="profile view">
            <div className="main">
                <Card className="profile-info">
                    <Card className="profile-pic" />
                    <div className="profile-information">
                        <h1 className="name">{data.name}</h1>
                        <h1 className="user">@{data.user}</h1>
                        <Button className="follow" label="Follow" />
                        <p className="bio">
                            Hello! My name is Gabriel and i'm a fullstack
                            developer. Node, React.js, MySQL, Git and a lot of
                            fun! I like to drink beer and i do it almost every
                            day.
                        </p>
                    </div>
                </Card>
                <Card className="profile-actions">
                    <Button>
                        <Icon path={mdiFileImage} size={0.7} color="#ffffff" />
                    </Button>
                </Card>
            </div>
        </div>
    );
};
