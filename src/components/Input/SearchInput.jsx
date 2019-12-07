import React from 'react';
import Input from './Input';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import './Input.css';

export default props => {
    return (
        <div className={`_search-input ${props.className || ''}`}>
            <Input className="_search" placeholder="Pesquisar" />
            <Icon path={mdiMagnify} size={0.8} color="#303030" />
        </div>
    );
};
