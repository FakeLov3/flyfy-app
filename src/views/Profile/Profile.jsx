import React, { useEffect, useState, useContext } from 'react';
import { LoaderContext } from '../../config/context';
import User from './User';
import api from '../../services/api';
import './Profile.scss';

export default props => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { setLoader } = useContext(LoaderContext);
    const { user } = props.match.params;

    useEffect(() => {
        setLoader('active');
        getUserData();
        // eslint-disable-next-line
    }, [user]);

    const getUserData = () => {
        api.get(`user?username=${user}`)
            .then(({ data }) => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error(error))
            .finally(() => {
                setLoader('');
                setLoading(false);
            });
    };

    return (
        <div className="profile view">{!loading && <User data={data} />}</div>
    );
};
