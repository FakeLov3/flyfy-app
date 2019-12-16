import React, { useEffect, useState, useContext } from 'react';
import { LoaderContext } from '../../config/context';
import Account from './Account';
import User from './User';
import api from '../../services/api';
import './Profile.scss';

export default props => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { user } = props.match.params;

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        api.get(`user/${user}`)
            .then(({ data }) => {
                console.log(data);
                setLoading(false);
                setData(data);
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    };

    return (
        <div className="profile view">
            {!loading ? (
                data.isUser ? (
                    <Account data={data} />
                ) : (
                    <User data={data} />
                )
            ) : (
                <></>
            )}
        </div>
    );
};
