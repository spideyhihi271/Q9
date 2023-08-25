import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import configs from '../../../configs';
// Assets
import './Sidebar.scss';

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [minSize, setMinSize] = useState(false);
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
        <div
            className={`relative block w-52 h-full overflow-hidden py-1 dark:bg-black transition-all ${
                minSize ? 'sidebar-wrapper-active' : ''
            }`}
        >
            <Link className="flex items-center px-4 w-full h-16 border-b-[1px] dark:border-b-gray-800"></Link>
            <nav className="block py-2 px-2">
                {navList.map((item, idx) => (
                    <NavLink
                        to={item.link}
                        key={idx}
                        className="relative flex items-center px-4 h-12 text-xl text-slate-500 group rounded hover:bg-hoverLight dark:hover:bg-hoverDark transition-colors"
                    >
                        <div className="flex flex-1 items-center h-full">
                            <span className="group-hover:text-light dark:group-hover:text-dark">
                                {item.icon}
                            </span>
                            <p
                                className={`mx-4 text-sm overflow-hidden group-hover:text-light dark:group-hover:text-dark transition-all ${
                                    minSize ? 'sidebar-label-active' : ''
                                }`}
                            >
                                {item.title}
                            </p>
                        </div>
                        {item.notify > 0 && (
                            <p
                                className={`flex items-center justify-center h-4 w-4 text-white text-xs rounded-full bg-red-500 ${
                                    minSize ? 'sidebar-icon-active' : ''
                                }`}
                            >
                                1
                            </p>
                        )}
                    </NavLink>
                ))}
            </nav>

            <button
                className={`absolute bottom-14 flex items-center w-full mx-6 text-xl text-slate-400  ${
                    minSize ? 'sidebar-scale-active' : ''
                }`}
                onClick={() => setDarkMode(!darkMode)}
            >
                <i className="fa-thin fa-circle-half-stroke"></i>
                <p className="mx-4 text-sm">Dark Mode</p>
            </button>

            <button
                className={`absolute bottom-5 flex items-center w-full mx-6 text-xl text-slate-400  ${
                    minSize ? 'sidebar-scale-active' : ''
                }`}
                onClick={() => setMinSize(!minSize)}
            >
                <i className="fa-light fa-arrow-right-from-bracket"></i>
                <p className="mx-4 text-sm">Collapse</p>
            </button>
        </div>
    );
}

export default Header;
