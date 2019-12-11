import React from 'react';
import './Card.scss';

export default props => {
    return (
        <div className={`card ${props.className || ''}`}>{props.children}</div>
    );
};
