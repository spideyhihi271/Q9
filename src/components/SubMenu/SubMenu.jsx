import React from 'react';
import Tippy from '@tippyjs/react/headless';

function Submenu({
    data,
    children,
    visible,
    placement = 'bottom-end',
    onClickOutside,
}) {
    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            visible={visible}
            placement={placement}
            onClickOutside={onClickOutside}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <ul className="w-fit min-w-[220px] bg-white dark:bg-secondDark  rounded-lg shadow-lg overflow-hidden">
                        {data.map((item, idx) => (
                            <button
                                key={idx}
                                className="px-2 flex items-center w-full h-12 dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark"
                            >
                                <span className="w-8">{item.icon}</span>
                                <span className="mx-1 flex-1 text-sm text-left">
                                    {item.title}
                                </span>
                            </button>
                        ))}
                    </ul>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Submenu;
