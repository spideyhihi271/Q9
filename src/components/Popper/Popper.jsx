import React from 'react';
import Tippy from '@tippyjs/react/headless';

function Popper({
    children,
    visible,
    dropElement,
    placement = 'bottom',
    onClickOutside,
}) {
    return (
        <Tippy
            interactive
            visible={visible}
            placement={placement}
            onClickOutside={onClickOutside}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    {dropElement}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Popper;
