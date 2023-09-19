import React from 'react';
import './Switch.scss';

function Switch({ value, handelChange }) {
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => handelChange(e)}
            />
            <span className="slider"></span>
        </label>
    );
}

export default Switch;
