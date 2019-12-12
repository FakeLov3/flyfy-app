import React from 'react';
import './Bar.scss';

export default props => (
    <div className={`bar ${props.className || ''}`}>{props.children}</div>
);
