import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { SidebarContext } from '../../config/context';
import { mdiMenu, mdiMagnify } from '@mdi/js';
import './MobHeader.scss';

export default props => {
    const { mobileSidebar, setMobileSidebar } = useContext(SidebarContext);

    const handleSearchClick = () => {
        console.log('opa');
    };

    return (
        <header className={`header-nav`}>
            <Icon
                onClick={() => setMobileSidebar(!mobileSidebar)}
                className="icon"
                path={mdiMenu}
                size={1}
                color="#ffffff"
            />
            <Link to={'/'} className="logo">
                <h1>flyfy</h1>
            </Link>
            <Icon
                onClick={handleSearchClick}
                className="icon"
                path={mdiMagnify}
                size={1}
                color="#ffffff"
            />
        </header>
    );
};
