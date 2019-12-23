import React from 'react';
import { Link } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
import { Bar } from '../';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiNewspaperVariant, mdiMessage, mdiAccountGroup } from '@mdi/js';
import './Sidebar.scss';

export default ({ data }) => {
    const items = [
        {
            name: 'Feed',
            path: '/',
            icon: mdiNewspaperVariant,
            size: 0.8,
        },
        {
            name: 'Messages',
            path: '/chat',
            icon: mdiMessage,
            size: 0.7,
        },
        {
            name: 'Groups',
            path: '/groups',
            icon: mdiAccountGroup,
            size: 0.7,
        },
    ];

    return (
        <Bar className="sidebar">
            <Link to={'#'} className="profile-item item">
                <img
                    src={data.profilePic || noProfilePic}
                    alt="profile"
                    className="profile-icon item-icon"
                ></img>
                <p className="profile-name item-name">{data.user}</p>
            </Link>
            <div className="divider" />
            {items.map((item, i) => (
                <Link to={item.path} className="item" key={i}>
                    <Icon
                        className="item-icon"
                        path={item.icon}
                        size={item.size}
                        color="#ffffff"
                    />
                    <p className="item-name">{item.name}</p>
                </Link>
            ))}
        </Bar>
    );
};
