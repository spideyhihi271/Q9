import React from 'react';
import './Switch.scss';

function Switch() {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
}

export default Switch;
