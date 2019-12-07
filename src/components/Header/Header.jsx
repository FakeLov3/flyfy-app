import React from 'react';
import { IconInput } from '../';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiMagnify } from '@mdi/js';
import './Header.css';

export default props => {
    return (
        <header className="header-nav">
            <h1 className="logo">Flyfy</h1>
            <div className="menu">
                <IconInput
                    placeholder="Pesquisar"
                    icon={
                        <Icon
                            className="search-icon"
                            path={mdiMagnify}
                            size={0.8}
                            color="#303030"
                        />
                    }
                    className="search"
                />
                <div className="profile"></div>
                <div className="more">
                    <Icon path={mdiDotsVertical} size={0.8} color="#ffffff" />
                </div>
            </div>
        </header>
    );
};
