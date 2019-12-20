import React from 'react';
import './Modal.scss';

export default props => {
    return (
        <div
            className={`modal-wrapper ${props.active} ${props.className || ''}`}
        >
            <div className="modal">{props.children}</div>
        </div>
    );
};
