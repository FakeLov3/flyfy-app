import React from 'react';
import { Input } from '../';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiMagnify } from '@mdi/js';
import './Header.scss';

export default props => {
    return (
        <header className="header-nav">
            <h1 className="logo">flyfy</h1>
            <div className="menu">
                <Input
                    placeholder="Pesquisar"
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
                <div className="icon profile"></div>
                <div className="icon more">
                    <Icon path={mdiDotsVertical} size={0.8} color="#ffffff" />
                </div>
            </div>
        </header>
    );
};
