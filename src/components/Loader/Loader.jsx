import React from 'react';
import bars from '../../assets/images/bars.svg';
import './Loader.css';

export default props => (
    <div className={`main-loader ${props.className}`}>
        <img alt="loader" src={bars} />
    </div>
);
