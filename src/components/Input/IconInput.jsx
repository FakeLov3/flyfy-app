import React from 'react';
import Input from './Input';
import './Input.css';

export default props => {
    return (
        <div
            style={props.style || {}}
            className={`_search-input ${props.className || ''}`}
        >
            <Input
                {...props}
                className="_search"
                style={{
                    order: props.align === 'left' ? 1 : 0,
                }}
            />
            {props.icon || null}
        </div>
    );
};
