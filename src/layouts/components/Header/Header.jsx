import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Assets
import config from '../../../configs';
import { loginClear } from '../../../redux/authSlice';
import { modelSetChildren, modelSetOpen } from '../../../redux/modalSlice';
// Components
import Search from '../Search';
import Settings from '../../../components/Settings';
import Submenu from '../../../components/SubMenu';

function Header({ activeSidebar, setActiveSidebar }) {
    // Default
    const actions = [
        {
            title: 'Thông tin tài khoản',
            icon: <i className="fa-light fa-user"></i>,
            handle: () => {
                navigate(config.routes.profile);
                setActiveLogger(false);
            },
        },
        {
            title: 'Video đã xem',
            icon: <i className="fa-light fa-clock-rotate-left"></i>,
            handle: () => {
                navigate(config.routes.history);
                setActiveLogger(false);
            },
        },
        {
            title: 'Cài đặt',
            icon: <i className="fa-light fa-gear"></i>,
            handle: () => {},
        },
        {
            title: 'Điều khoản sử dụng',
            icon: <i className="fa-light fa-shield-check"></i>,
            handle: () => {},
        },
        {
            title: 'Trợ giúp',
            icon: <i className="fa-light fa-circle-info"></i>,
            handle: () => {},
        },
        {
            title: 'Đăng xuất',
            icon: <i className="fa-light fa-right-from-bracket"></i>,
            handle: () => {
                dispath(loginClear());
                setActiveLogger(false);
            },
        },
    ];

    // State
    const loginState = useSelector((state) => state.auth.login);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [activeSettings, setActiveSettings] = useState(false);
    const [activeLogger, setActiveLogger] = useState(false);

    // Handle
    const handleToSignIn = () => {
        dispath(modelSetChildren(3));
        dispath(modelSetOpen(true));
    };
    // Render
    return (
        <header className="flex items-center justify-between lg:justify-normal w-full pb-4">
            <div className="flex lg:hidden items-center w-fit">
                <div className="w-fit mx-auto">
                    <button
                        className="w-8 h-8 rounded-lg border text-black dark:border-0 text-xl dark:text-white"
                        onClick={() => {
                            setActiveSidebar(!activeSidebar);
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
                <Link
                    to={config.routes.search}
                    className="lg:hidden flex items-center justify-center ml-2 lg:ml-4 h-9 w-9 lg:h-10 lg:w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                >
                    <i className="fa-light fa-magnifying-glass"></i>
                </Link>
                <button
                    className="relative ml-2 lg:ml-4 h-9 w-9 lg:h-10 lg:w-10 border rounded-full dark:bg-hoverDark dark:border-0 dark:text-white"
                    onClick={() => setActiveSettings(!activeSettings)}
                >
                    <Settings
                        visible={activeSettings}
                        setVisible={setActiveSettings}
                        onClickOutside={() => setActiveSettings(false)}
                    >
                        <i className="fa-light fa-gear"></i>
                    </Settings>
                </button>

                {!loginState.user ? (
                    <Link to={config.routes.login}>
                        <button
                            className="ml-2 lg:ml-4 px-2 h-10 text-sm font-normal border rounded-xl dark:bg-hoverDark dark:border-0 dark:text-white"
                            onClick={handleToSignIn}
                        >
                            Đăng nhập
                        </button>
                    </Link>
                ) : (
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
                                    src={loginState.user.avatar}
                                    alt=""
                                />
                                <div className="hidden lg:block mx-2">
                                    <h4 className="text-sm">
                                        {loginState.user.name}
                                    </h4>
                                    <p className="hidden lg:block text-xs text-gray-400">
                                        Hi. Welcome
                                    </p>
                                </div>
                            </div>
                        </Submenu>
                    </button>
                )}
            </nav>
        </header>
    );
}

export default Header;
