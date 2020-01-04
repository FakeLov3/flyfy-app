import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Input, Dropdown } from '../';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import {
    mdiDotsVertical,
    mdiMagnify,
    mdiBell,
    mdiForum,
    mdiAccountMultiple,
} from '@mdi/js';
import './Header.scss';

export default ({ data }) => {
    const [dropdown, setDropdown] = useState({ active: false });

    const dropdownItems = [
        {
            name: 'Sign out',
            onClick: () => {
                localStorage.removeItem('token');
                window.location.replace('/signin');
            },
        },
    ];

    return (
        <>
            <ReactTooltip className="tooltip" place="bottom" effect="solid" />
            <header className="header-nav">
                <Link to={'/'} className="logo">
                    <h1>flyfy</h1>
                </Link>
                <div className="menu">
                    <Input
                        placeholder="Search anything..."
                        icon={
                            <Icon
                                className="icon search-icon"
                                path={mdiMagnify}
                                size={0.8}
                                color="#ffffff"
                            />
                        }
                        className="search"
                    />
                    <Link
                        to={`/user/${data.user}`}
                        data-tip="Profile"
                        className="profile-pic"
                    >
                        <img
                            src={data.profilePic || noProfilePic}
                            alt="profile-pic"
                        />
                    </Link>
                    <div className="divider" />
                    <div data-tip="Followers" className="icon multiple">
                        <Icon
                            path={mdiAccountMultiple}
                            size={0.9}
                            color="#ffffff"
                        />
                    </div>
                    <div data-tip="Messages" className="icon forum">
                        <Icon path={mdiForum} size={0.72} color="#ffffff" />
                    </div>
                    <div data-tip="Notifications" className="icon bell">
                        <Icon path={mdiBell} size={0.65} color="#ffffff" />
                    </div>
                    <div className="divider" />
                    <div
                        onClick={() =>
                            setDropdown(dropdown => ({
                                ...dropdown,
                                active: !dropdown.active,
                            }))
                        }
                        className="icon more"
                    >
                        <Icon
                            path={mdiDotsVertical}
                            size={0.8}
                            color="#ffffff"
                        />
                    </div>
                    <Dropdown
                        active={dropdown.active}
                        setActive={setDropdown}
                        user={data.user}
                        items={dropdownItems}
                    />
                </div>
            </header>
        </>
    );
};
