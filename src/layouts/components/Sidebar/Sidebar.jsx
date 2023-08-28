import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Asset
import config from '../../../configs';
import './Sidebar.scss';

function Sidebar() {
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
            icon: <i className="fa-regular fa-tv-music"></i>,
            title: 'Chủ đề và Thể loại',
        },
        {
            link: config.routes.history,
            icon: <i className="fa-regular fa-clock-rotate-left"></i>,
            title: 'Nghe gần đây',
        },
        {
            link: '/',
            icon: <i className="fa-sharp fa-regular fa-heart"></i>,
            title: 'Bài hát yêu thích',
        },
        {
            link: '/',
            icon: <i className="fa-regular fa-upload"></i>,
            title: 'Đã tải lên',
        },
    ];

    // State
    const [miniSize, setMiniSize] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
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

    // Render
    return (
        <>
            <aside
                className={` border-r-[1px] dark:border-0 bg-white dark:bg-[#0c021c] transition-all
                    ${miniSize ? 'w-16' : 'w-60'}`}
            >
                <header
                    className={`mb-2 px-4 flex items-center justify-between flex-wrap h-16 ${
                        miniSize ? 'px-0 py-2 h-fit' : ''
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
                            <i className="fa-light fa-bars-progress"></i>
                        </button>
                    </div>
                </header>
                <nav className="mb-4">
                    <p className="mx-4 text-sm font-normal text-gray-400">
                        MENU
                    </p>
                    {navList.slice(0, navList.length / 2).map((nav, idx) => (
                        <Link
                            to={nav.link}
                            className={`mx-2  p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark ${
                                miniSize ? 'justify-center' : ''
                            }`}
                        >
                            <span
                                className={`w-8 text-xl ${
                                    miniSize ? 'text-center' : ''
                                } `}
                            >
                                {nav.icon}
                            </span>
                            {!miniSize && (
                                <p className="text-sm">{nav.title}</p>
                            )}
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
                                className={`mx-2  p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight  dark:hover:bg-hoverDark ${
                                    miniSize ? 'justify-center' : ''
                                }`}
                            >
                                <span
                                    className={`w-8 text-xl ${
                                        miniSize ? 'text-center' : ''
                                    } `}
                                >
                                    {nav.icon}
                                </span>
                                {!miniSize && (
                                    <p className="text-sm">{nav.title}</p>
                                )}
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
