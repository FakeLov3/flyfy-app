import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Bar, Input } from '../';
import FriendsList from './FriendsList';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import './Friends.scss';

export default props => {
    const [data, setData] = useState({
        followers: [],
        rooms: [],
    });

    useEffect(() => {
        api.get('/friends')
            .then(({ data }) => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Bar className="friends-wrapper">
            <div className="friends">
                <FriendsList data={data} />
                <Input
                    placeholder="Find a flyer..."
                    icon={
                        <Icon
                            className="icon search-icon"
                            path={mdiMagnify}
                            size={0.8}
                            color="#303030"
                        />
                    }
                    className="search"
                />
            </div>
        </Bar>
    );
};
