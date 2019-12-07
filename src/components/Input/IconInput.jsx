import React from 'react';
import Input from './Input';
import './Input.css';

export default props => {
    return (
        <div
            style={{
                flexDirection: props.align === 'left' ? 'row-reverse' : 'row',
            }}
            className={`_search-input ${props.className || ''}`}
        >
            <Input {...props} className="_search" />
            {props.icon || null}
        </div>
    );
};
