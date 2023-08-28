import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Submenu from '../../../components/SubMenu';

// Assets

// Components
import Search from '../Search';

function Header() {
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
        <header className="sticky top-0 z-[9999] flex items-center w-full pb-4">
            <div className="flex-1">
                <Search />
            </div>
            <nav className="flex items-center">
                <button
                    className="ml-4 h-10 w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                    onClick={() => setActiveSettings(!activeSettings)}
                >
                    <i class="fa-light fa-signal-stream"></i>
                </button>
                <div className="relative">
                    <Submenu
                        data={actions}
                        visible={activeSettings}
                        setVisible={setActiveSettings}
                        onClickOutside={() => setActiveSettings(false)}
                    >
                        <button
                            className="ml-4 h-10 w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                            onClick={() => setActiveSettings(!activeSettings)}
                        >
                            <i className="fa-sharp fa-light fa-gear"></i>
                        </button>
                    </Submenu>
                </div>

                <button className="relative ml-4 w-fit h-fit p-1 border rounded-xl dark:bg-hoverDark dark:border-0 dark:text-white">
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
                                className="w-10 h-10 rounded-full"
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/274659376_318655500240616_4513126819384676810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DUnK36wZLv4AX9aW3y_&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCJIDUSk52A8JPx90SOQnMpIGW0tGmCPb0kMuKCFw1gBQ&oe=64EFC563"
                                alt=""
                            />
                            <div className="mx-2">
                                <h4 className="text-sm">Spidey</h4>
                                <p className="text-xs text-gray-400">
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
