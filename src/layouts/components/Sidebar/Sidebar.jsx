import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import configs from '../../../configs';
import logo from '../../../assets/images/logo.png';

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const navList = [
        {
            icon: <i className="fa-light fa-grid-2"></i>,
            title: 'Dashboard',
            link: configs.routes.dashboard,
            notify: 0,
        },
        {
            icon: <i className="fa-light fa-comment"></i>,
            title: 'Chat',
            link: configs.routes.dashboard,
            notify: 0,
        },
        {
            icon: <i className="fa-light fa-files"></i>,
            title: 'Projects',
            link: configs.routes.project,
            notify: 1,
        },
        {
            icon: <i className="fa-light fa-circle-check"></i>,
            title: 'Tasks',
            link: configs.routes.dashboard,
            notify: 0,
        },
        {
            icon: <i className="fa-light fa-bell"></i>,
            title: 'Notifications',
            link: configs.routes.dashboard,
            notify: 0,
        },
        {
            icon: <i className="fa-light fa-user"></i>,
            title: 'Team',
            link: configs.routes.dashboard,
            notify: 0,
        },
        {
            icon: <i className="fa-light fa-gear"></i>,
            title: 'Settings',
            link: configs.routes.dashboard,
            notify: 0,
        },
    ];
    const handelDarkMode = (value) => {
        let documentPage = document.documentElement;
        if (value) {
            documentPage.classList.remove('light');
            documentPage.classList.add('dark');
        } else {
            documentPage.classList.remove('dark');
            documentPage.classList.add('light');
        }
    };
    useEffect(() => {
        handelDarkMode(darkMode);
    }, [darkMode]);

    return (
        <div className="relative w-16 h-full dark:bg-black">
            <div className="mx-auto px-2 w-14 h-14 border-b-[1px] dark:border-b-gray-700">
                <Link className="w-full h-full">
                    <img
                        className="w-full h-full object-contain"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <nav className="my-2">
                {navList.map((nav, idx) => (
                    <Tippy content={nav.title} placement="right">
                        <NavLink className="relative flex items-center justify-center w-14 h-14 mx-auto rounded-lg group hover:bg-hoverLight dark:hover:bg-hoverDark  transition-all">
                            <span className="text-xl text-gray-500 dark:text-white group-hover:text-light dark:group-hover:text-white">
                                {nav.icon}
                            </span>
                            {nav.notify > 0 && (
                                <span className="absolute top-[10%] right-[10%] flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full border-2 border-white text-xs">
                                    1
                                </span>
                            )}
                        </NavLink>
                    </Tippy>
                ))}
            </nav>
            <nav className="absolute left-0 bottom-4 w-full">
                <div className="mx-auto w-9 h-9 rounded-full overflow-hidden">
                    <Link className="w-full h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div
                    className="my-2 mx-auto flex items-center justify-center w-9 h-9 rounded-full border text-lg"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? (
                        <i className="fa-light fa-moon"></i>
                    ) : (
                        <i className="fa-light fa-sun"></i>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Header;
