import React from 'react';
import { Link } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
import { Bar } from '../';
import Icon from '@mdi/react';
import { mdiNewspaperVariant, mdiMessage, mdiAccountGroup } from '@mdi/js';
import './Sidebar.scss';

export default props => {
    const items = [
        {
            name: 'Home',
            path: '/',
            icon: mdiNewspaperVariant,
            size: 0.8,
        },
        {
            name: 'Chat',
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
            {items.map((item, i) => (
                <Link to={item.path} className="item" key={i}>
                    <Icon path={item.icon} size={item.size} color="#ffffff" />
                </Link>
            ))}
        </Bar>
    );
};
