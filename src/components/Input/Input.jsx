import React from 'react';
import './Input.css';

export default props => {
    return (
        <input
            style={props.style || {}}
            className={`_input ${props.className || ''}`}
            autoComplete={props.autoComplete || 'off'}
            type={props.type || 'text'}
            name={props.name || ''}
            placeholder={props.placeholder || ''}
            required={props.required || false}
        ></input>
    );
};
