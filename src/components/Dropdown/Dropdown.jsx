import React from 'react';
import Icon from '@mdi/react';
import { mdiPower } from '@mdi/js';
import './Dropdown.scss';

export default props => {
    const handleOptionClick = () => {};

    return (
        <div
            onClick={() =>
                props.setActive(dropdown => ({
                    ...dropdown,
                    active: !dropdown.active,
                }))
            }
            className={`dropdown-wrapper${props.active ? ' active' : ''}`}
        >
            <div style={{ right: `calc(20% + ${-8}px)` }} className="dropdown">
                <div className="header">
                    <p>
                        Signed in as <br></br>
                        <span style={{ fontWeight: 'bold' }}>{props.user}</span>
                    </p>
                </div>
                <div className="divider"></div>
                {props.items.map((item, i) => (
                    <div key={i} onClick={handleOptionClick} className="item">
                        <Icon
                            className="icon"
                            path={mdiPower}
                            size={0.7}
                            color="#303030"
                        />
                        <p className="item-name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
