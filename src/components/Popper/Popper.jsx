import React from 'react';
import Tippy from '@tippyjs/react/headless';

function Popper({ children, popContent }) {
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    {popContent}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Popper;
