import React from 'react';
import { Bar, Card } from '../';
import './Friends.scss';

export default props => {
    return (
        <Bar className="friends-wrapper">
            <div className="friends">
                <Card>
                    <p>Friends</p>
                </Card>
            </div>
        </Bar>
    );
};
