import React from 'react';
import './Button.css';

export default props => {
    return (
        <button
            className={`btn ${props.className || ''}`}
            style={props.style || {}}
            type={props.type || 'button'}
            onClick={props.onClick || null}
        >
            {props.label || props.children || 'Button'}
        </button>
    );
};
