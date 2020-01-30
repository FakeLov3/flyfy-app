import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
import { Bar } from '../';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { SidebarContext } from '../../config/context';
import {
    mdiNewspaperVariant,
    mdiMessage,
    mdiAccountGroup,
    mdiFire,
    mdiSettings,
} from '@mdi/js';
import './Sidebar.scss';

export default ({ data }) => {
    const { mobileSidebar } = useContext(SidebarContext);

    const items = [
        {
            name: 'Feed',
            path: '/',
            icon: mdiNewspaperVariant,
            size: 0.7,
        },
        {
            name: 'Trending',
            path: '/trending',
            icon: mdiFire,
            size: 0.9,
        },
        {
            name: 'Messages',
            path: '/chat',
            icon: mdiMessage,
            size: 0.65,
        },
        {
            name: 'Groups',
            path: '/groups',
            icon: mdiAccountGroup,
            size: 0.65,
            sub: [
                {
                    name: 'Create a group',
                    path: '/groups/create',
                    icon: mdiAccountGroup,
                    size: 0.65,
                },
            ],
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: mdiSettings,
            size: 0.65,
        },
    ];

    return (
        <Bar
            className={`sidebar ${
                window.isMobile && mobileSidebar ? 'mobile active' : 'mobile'
            }`}
        >
            <Link
                style={{
                    margin: window.isMobile ? '48px 0 0' : '0',
                }}
                to={`/user/${data.user}`}
                className="profile-item item"
            >
                <img
                    src={data.profilePic || noProfilePic}
                    alt="profile"
                    className="profile-icon item-icon"
                ></img>
                <p className="profile-name item-name">{data.user}</p>
            </Link>
            <div className="divider" />
            {items.map((item, i) => (
                <Link
                    to={item.path}
                    className={`item${
                        window.location.pathname === item.path ? ' active' : ''
                    }`}
                    key={i}
                >
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
