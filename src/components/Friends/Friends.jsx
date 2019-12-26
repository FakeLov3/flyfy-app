import React from 'react';
import { Bar, Card, Input } from '../';
import Icon from '@mdi/react';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import { mdiMagnify } from '@mdi/js';
import './Friends.scss';

export default props => {
    return (
        <Bar className="friends-wrapper">
            <div className="friends">
                <Input
                    placeholder="Find a flyer..."
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
            </div>
        </Bar>
    );
};
