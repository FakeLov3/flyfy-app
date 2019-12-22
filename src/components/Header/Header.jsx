import React, { useState } from 'react';
import { Input, Dropdown } from '../';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiDotsVertical, mdiMagnify, mdiBell } from '@mdi/js';
import './Header.scss';

export default ({ data }) => {
    const [dropdown, setDropdown] = useState({ active: false });

    const handleUserProfileClick = () => {
        console.log('opa');
    };

    const dropdownItems = [
        {
            name: 'Sign out',
        },
    ];

    return (
        <header className="header-nav">
            <h1 className="logo">flyfy</h1>
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
                <div
                    onClick={() => handleUserProfileClick()}
                    className="profile-pic"
                >
                    <img
                        src={data.profilePic || noProfilePic}
                        alt="profile-pic"
                    />
                </div>
                <div className="icon bell">
                    <Icon path={mdiBell} size={0.7} color="#ffffff" />
                </div>
                <div
                    onClick={() =>
                        setDropdown(dropdown => ({
                            ...dropdown,
                            active: !dropdown.active,
                        }))
                    }
                    className="icon more"
                >
                    <Icon path={mdiDotsVertical} size={0.8} color="#ffffff" />
                </div>
                <Dropdown
                    active={dropdown.active}
                    setActive={setDropdown}
                    user={data.user}
                    items={dropdownItems}
                />
            </div>
        </header>
    );
};
