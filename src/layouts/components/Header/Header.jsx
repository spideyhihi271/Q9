import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Submenu from '../../../components/SubMenu';

// Assets

// Components
import Search from '../Search';

function Header({ setActiveSidebar }) {
    // Default
    const actions = [
        {
            title: 'Bắt đầu đài phát',
            icon: <i className="fa-light fa-signal-stream"></i>,
            func: () => {},
        },
        {
            title: 'Thêm vào danh sách',
            icon: <i className="fa-regular fa-circle-plus"></i>,
            func: () => {},
        },
        {
            title: 'Phát tiếp theo',
            icon: <i className="fa-regular fa-forward"></i>,
            func: () => {},
        },
        {
            title: 'Phát nội dung tương tự',
            icon: <i className="fa-regular fa-scrubber"></i>,
            func: () => {},
        },
        {
            title: 'Thêm vào playlists',
            icon: <i className="fa-regular fa-music"></i>,
            func: () => {},
        },
        {
            title: 'Sao chép liên kết',
            icon: <i className="fa-regular fa-copy"></i>,
            func: () => {},
        },
    ];

    // State
    const [activeSettings, setActiveSettings] = useState(false);
    const [activeLogger, setActiveLogger] = useState(false);

    return (
        <header className="flex items-center justify-between lg:justify-normal w-full pb-4">
            <div className="flex lg:hidden items-center w-fit">
                <div className="w-fit mx-auto">
                    <button
                        className="w-8 h-8 rounded-lg border text-black dark:border-0 text-xl dark:text-white"
                        onClick={() => {
                            setActiveSidebar(true);
                        }}
                    >
                        <i className="fa-sharp fa-light fa-bars"></i>
                    </button>
                </div>
                <div className="flex-1 mx-2">
                    <div className="flex items-center">
                        <div className="mr-1 w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="mr-1 w-3 h-3 rounded-full bg-yellow-300"></div>
                        <div className="mr-1 w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden lg:block">
                <Search />
            </div>
            <nav className="flex items-center">
                <Link className="lg:hidden flex items-center justify-center ml-2 lg:ml-4 h-9 w-9 lg:h-10 lg:w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white">
                    <i className="fa-light fa-magnifying-glass"></i>
                </Link>
                <button
                    className="ml-2 lg:ml-4 h-9 w-9 lg:h-10 lg:w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                    onClick={() => setActiveSettings(!activeSettings)}
                >
                    <i className="fa-light fa-signal-stream"></i>
                </button>
                <div className="relative">
                    <Submenu
                        data={actions}
                        visible={activeSettings}
                        setVisible={setActiveSettings}
                        onClickOutside={() => setActiveSettings(false)}
                    >
                        <button
                            className="ml-2 lg:ml-4 h-9 w-9 lg:h-10 lg:w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                            onClick={() => setActiveSettings(!activeSettings)}
                        >
                            <i className="fa-sharp fa-light fa-gear"></i>
                        </button>
                    </Submenu>
                </div>
                <button className="ml-2 lg:ml-4 relative w-fit h-fit p-1 border rounded-xl dark:bg-hoverDark dark:border-0 dark:text-white">
                    <Submenu
                        data={actions}
                        visible={activeLogger}
                        setVisible={setActiveLogger}
                        onClickOutside={() => setActiveLogger(false)}
                    >
                        <div
                            className="flex items-center text-left"
                            onClick={() => setActiveLogger(!activeLogger)}
                        >
                            <img
                                className="h-8 w-8 lg:h-10 lg:w-10 rounded-full"
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/274659376_318655500240616_4513126819384676810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DUnK36wZLv4AX9aW3y_&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCJIDUSk52A8JPx90SOQnMpIGW0tGmCPb0kMuKCFw1gBQ&oe=64EFC563"
                                alt=""
                            />
                            <div className="mx-2">
                                <h4 className="text-sm">Spidey</h4>
                                <p className="hidden lg:block text-xs text-gray-400">
                                    Prenium Member
                                </p>
                            </div>
                        </div>
                    </Submenu>
                </button>
            </nav>
        </header>
    );
}

export default Header;
