import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Asset
import config from '../../../configs';
import * as userService from '../../../services/userService';

function Sidebar({ miniSize, setMiniSize }) {
    // Default
    const navList = [
        {
            link: config.routes.home,
            icon: <i className="fa-light fa-grid-2"></i>,
            title: 'Trang chủ',
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
            link: config.routes.history,
            icon: <i className="fa-light fa-clock-rotate-left"></i>,
            title: 'Nghe gần đây',
        },
    ];

    // State
    const url = useLocation().pathname;
    const loginState = useSelector((state) => state.auth.login);
    const [playlists, setPlaylists] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        setMiniSize(false);
    }, [url]);

    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            let data = await userService.getMyPlaylist();
            setPlaylists(data);
            setFetching(false);
        };
        if (loginState.user) getData();
    }, [loginState.user]);

    // Render
    return (
        <>
            <aside
                className={`fixed z-30 lg:relative h-screen overflow-y-auto border-r-[1px] dark:border-0 bg-white dark:bg-[#0c021c] transition-all
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
                    {navList.map((nav, idx) => (
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
                            {loginState.user && (
                                <>
                                    {fetching && (
                                        <>
                                            {playlists.map((playlist, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={
                                                        config.routes.playList +
                                                        '/' +
                                                        playlist._id
                                                    }
                                                    className="mx-2  p-2 flex items-center h-12 rounded-lg dark:text-white hover:bg-hoverLight  dark:hover:bg-hoverDark"
                                                >
                                                    <span className="w-8 text-xl">
                                                        <i className="fa-light fa-folder-music"></i>
                                                    </span>
                                                    <p className="flex-1 text-sm line-clamp-1">
                                                        {playlist.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;
