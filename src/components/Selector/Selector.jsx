import React from 'react';
import Tippy from '@tippyjs/react/headless';

function Selector({
    data,
    selected,
    children,
    visible,
    setSelected,
    onClickOutside,
}) {
    // Handel
    const handleSelected = (item) => {
        setSelected(item);
        onClickOutside();
    };

    // Render
    return (
        <Tippy
            interactive
            visible={visible}
            appendTo={() => document.body}
            onClickOutside={onClickOutside}
            placement="bottom-end"
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <ul className="w-fit min-w-[220px] bg-white dark:bg-secondDark  rounded-lg shadow-lg overflow-hidden">
                        {data.map((item, idx) => (
                            <button
                                key={idx}
                                className="px-2 flex items-center w-full h-12 dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark cursor-pointer"
                                onClick={() => handleSelected(item)}
                            >
                                <span className="w-8">
                                    {selected.id === item.id && (
                                        <i className="fa-regular fa-check"></i>
                                    )}
                                </span>
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

export default Selector;
