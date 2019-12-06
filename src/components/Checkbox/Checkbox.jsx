import React from 'react';
import './Checkbox.css';

export default props => (
    <div onClick={props.onClick} className={`checkbox${props.active ? ' active' : ''}`}>

    </div>
);