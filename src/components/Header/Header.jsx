import React from 'react';
import { SearchInput } from '../';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import './Header.css';

export default props => {
    return (
        <header className="header-nav">
            <h1 className="logo">Flyfy</h1>
            <div className="menu">
                <SearchInput className="search" />
                <div className="profile"></div>
                <div className="more">
                    <Icon path={mdiDotsVertical} size={0.8} color="#ffffff" />
                </div>
            </div>
        </header>
    );
};
