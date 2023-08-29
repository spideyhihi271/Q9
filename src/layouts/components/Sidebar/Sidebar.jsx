import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Asset
import config from '../../../configs';
import './Sidebar.scss';

function Sidebar({ miniSize, setMiniSize }) {
    // Default
    const navList = [
        {
            link: config.routes.home,
            icon: <i className="fa-light fa-grid-2"></i>,
            title: 'Trang chủ',
        },
        {
            link: '/',
            icon: <i className="fa-light fa-compass"></i>,
            title: 'Khám phá',
        },
        {
            link: config.routes.library,
            icon: <i className="fa-light fa-album"></i>,
            title: 'Thư viện',
        },
        {
            link: '/',
            icon: <i className="fa-light fa-record-vinyl"></i>,
            title: 'Nâng cấp',
        },
        {
            link: '/',
            icon: <i className="fa-light fa-tv-music"></i>,
            title: 'Chủ đề và Thể loại',
        },
        {
            link: config.routes.history,
            icon: <i className="fa-light fa-clock-rotate-left"></i>,
            title: 'Nghe gần đây',
        },
        {
            link: '/',
            icon: <i className="fa-sharp fa-light fa-heart"></i>,
            title: 'Bài hát yêu thích',
        },
        {
            link: '/',
            icon: <i className="fa-light fa-arrow-up-from-bracket"></i>,
            title: 'Đã tải lên',
        },
    ];

    // State
    const [darkMode, setDarkMode] = useState(false);

    // Hooks
    useEffect(() => {
        handelDarkMode(darkMode);
    }, [darkMode]);

    //Handel
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

    // Render
    return (
        <>
            <aside
                className={`fixed z-[9999] lg:relative h-screen overflow-y-auto border-r-[1px] dark:border-0 bg-white dark:bg-[#0c021c] transition-all
                    ${
                        miniSize
                            ? 'translate-x-0 w-60 lg:w-16'
                            : 'translate-x-[-100%] lg:translate-x-0 w-0 lg:w-60'
                    }`}
            >
                <header
                    className={`mb-2 px-4 flex items-center justify-between flex-wrap h-16 ${
                        miniSize ? 'mx-2 lg:mx-0 p-2 h-20' : ''
                    }`}
                >
                    <div className="flex-1">
                        <div
                            className={`flex items-center ${
                                miniSize ? 'scale-75 translate-x-[-20%]' : ''
                            }`}
                        >
                            <div className="mr-2 w-4 h-4 rounded-full bg-red-600"></div>
                            <div className="mr-2 w-4 h-4 rounded-full bg-yellow-300"></div>
                            <div className="mr-2 w-4 h-4 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="w-fit mx-auto">
                        <button
                            className="w-8 h-8 rounded-lg border text-black dark:border-0 text-xl dark:text-white"
                            onClick={() => setMiniSize(!miniSize)}
                        >
                            <span className="hidden lg:block">
                                <i className="fa-light fa-bars-progress"></i>
                            </span>
                            <span className="block lg:hidden">
                                <i className="fa-light fa-xmark"></i>
                            </span>
                        </button>
                    </div>
                </header>
                <nav className="mb-4">
                    <p className="mx-4 text-sm font-normal text-gray-400">
                        MENU
                    </p>
                    {navList.slice(0, navList.length / 2).map((nav, idx) => (
                        <Link
                            key={idx}
                            to={nav.link}
                            className={`mx-2 p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark ${
                                miniSize ? 'lg: px-0 lg:justify-center' : ''
                            }`}
                        >
                            <span
                                className={`w-8 text-xl ${
                                    miniSize ? 'text-center' : ''
                                } `}
                            >
                                {nav.icon}
                            </span>
                            <p
                                className={`text-sm ${
                                    miniSize ? 'mx-2 lg:mx-0 lg:hidden' : ''
                                }`}
                            >
                                {nav.title}
                            </p>
                        </Link>
                    ))}
                </nav>
                <p className="mx-4 text-sm font-normal text-gray-400">KHÁC</p>
                <main className="h-1/2 overflow-y-auto">
                    {navList
                        .slice(navList.length / 2, navList.length)
                        .map((nav, idx) => (
                            <Link
                                key={idx}
                                to={nav.link}
                                className={`mx-2 p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark ${
                                    miniSize ? 'lg: px-0 lg:justify-center' : ''
                                }`}
                            >
                                <span
                                    className={`w-8 text-xl ${
                                        miniSize ? 'text-center' : ''
                                    } `}
                                >
                                    {nav.icon}
                                </span>
                                <p
                                    className={`text-sm ${
                                        miniSize ? 'mx-2 lg:mx-0 lg:hidden' : ''
                                    }`}
                                >
                                    {nav.title}
                                </p>
                            </Link>
                        ))}
                    {!miniSize && (
                        <>
                            {navList.slice(0, 3).map((nav, idx) => (
                                <Link
                                    key={idx}
                                    to={nav.link}
                                    className="mx-2  p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight  dark:hover:bg-hoverDark"
                                >
                                    <span className="w-8 text-xl">
                                        <i className="fa-light fa-folder-music"></i>
                                    </span>
                                    <p className="text-sm ">Tên Playlist</p>
                                </Link>
                            ))}
                        </>
                    )}
                </main>
            </aside>
            <button
                className="fixed bottom-[50px] right-[50px] z-[9999] w-10 h-10 dark:text-white border rounded-full text-sm"
                onClick={() => setDarkMode(!darkMode)}
            >
                Dark
            </button>
        </>
    );
}

export default Sidebar;
