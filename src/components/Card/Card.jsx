import React from 'react';
import './Card.scss';

export default props => {
    return (
        <div
            style={props.style || {}}
            className={`card ${props.className || ''}`}
        >
            {props.children}
        </div>
    );
};
