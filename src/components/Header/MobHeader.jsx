import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu, mdiMagnify } from '@mdi/js';
import './MobHeader.scss';

export default props => {
    return (
        <header className="header-nav">
            <Icon
                onClick={() => console.log('opa')}
                className="icon"
                path={mdiMenu}
                size={1}
                color="#ffffff"
            />
            <Link to={'/'} className="logo">
                <h1>flyfy</h1>
            </Link>
            <Icon
                onClick={() => console.log('opa')}
                className="icon"
                path={mdiMagnify}
                size={1}
                color="#ffffff"
            />
        </header>
    );
};
