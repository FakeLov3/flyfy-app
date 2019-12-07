import React from 'react';
import './Input.css';

export default props => {
    return (
        <input
            className={`_input ${props.className || ''}`}
            autoComplete={props.autoComplete || 'on'}
            type={props.type || 'text'}
            name={props.name || ''}
            placeholder={props.placeholder || ''}
            required={props.required || false}
        ></input>
    );
};
