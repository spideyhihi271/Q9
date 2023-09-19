import React, { useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

function Settings({
    children,
    visible,
    placement = 'bottom-end',
    onClickOutside,
}) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let theme = sessionStorage.getItem('theme');
        if (!theme) sessionStorage.setItem('theme', 'light');
        else {
            if (theme.includes('light')) setDarkMode(false);
            else setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        handelApplyMode(darkMode);
    }, [darkMode]);

    //Handel
    const handleChangeMode = (value) => {
        if (value === 'light') {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    };

    const handelApplyMode = (value) => {
        let documentPage = document.documentElement;
        if (value) {
            documentPage.classList.remove('light');
            documentPage.classList.add('dark');
        } else {
            documentPage.classList.remove('dark');
            documentPage.classList.add('light');
        }
    };

    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            visible={visible}
            placement={placement}
            onClickOutside={onClickOutside}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <div className="my-2 p-2 border shadow-lg rounded-xl dark:border-transparent bg-white dark:bg-hoverDark">
                        <p className="mb-2 dark:text-white">Giao diện</p>
                        <div className="flex items-center">
                            <div
                                className="relative w-24 h-16 border dark:border-transparent bg-white cursor-pointer text-sm"
                                onClick={() => handleChangeMode('light')}
                            >
                                {!darkMode && (
                                    <div className="absolute bottom-1 right-1 w-6 h-6  flex items-center justify-center bg-green-500 text-white rounded-full">
                                        <i className="fa-regular fa-check"></i>
                                    </div>
                                )}
                            </div>
                            <div
                                className="ml-1 relative w-24 h-16 border dark:border-transparent bg-bgDark cursor-pointer text-sm"
                                onClick={() => handleChangeMode('dark')}
                            >
                                {darkMode && (
                                    <div className="absolute bottom-1 right-1 w-6 h-6  flex items-center justify-center bg-green-500 text-white rounded-full">
                                        <i className="fa-regular fa-check"></i>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Settings;
