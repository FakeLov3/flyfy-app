import React from 'react';
import './Input.css';

export default props => {
    return (
        <input
            readOnly={props.readOnly || false}
            onChange={props.onChange || null}
            onFocus={props.onFocus || null}
            onBlur={props.onBlur || null}
            style={props.style || {}}
            spellCheck={props.spellCheck || 'false'}
            className={`_input ${props.className || ''}`}
            autoComplete={props.autoComplete || 'off'}
            type={props.type || 'text'}
            name={props.name || ''}
            defaultValue={props.defaultValue || ''}
            placeholder={props.placeholder || ''}
            required={props.required || false}
        ></input>
    );
};
