import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import config from '../../configs';
import SubMenu from '../SubMenu';

function ItemSong() {
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
    const [activeAction, setActiveAction] = useState(false);

    return (
        <div className="w-full">
            <Link to={config.routes.watch}>
                <header className="relative h-44 w-full group cursor-pointer rounded-2xl overflow-hidden">
                    <div className="absolute z-10 inset-0 bg-black/5 group-hover:bg-black/40"></div>
                    <div className="absolute top-2 right-2 z-10 text-white text-xs py-1 px-2  rounded-2xl overflow-hidden backdrop-blur bg-white/30 ">
                        #1 Treding
                    </div>
                    <img
                        className="absolute z-0 inset-0 w-full h-full object-cover"
                        src="https://i1.sndcdn.com/artworks-000223908563-u648gv-t500x500.jpg"
                        alt=""
                    />
                    <button className="absolute top-1/2 left-1/2 z-20 translate-x-[-50%] translate-y-[-50%] w-10 h-10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all">
                        <i className="fa-sharp fa-solid fa-play"></i>
                    </button>
                </header>
            </Link>
            <footer className="my-2">
                <div className="flex items-center justify-between">
                    <Link
                        to={config.routes.watch}
                        className="font-semibold dark:text-white"
                    >
                        Loving You Sunny
                    </Link>
                    <SubMenu
                        data={actions}
                        visible={activeAction}
                        setVisible={setActiveAction}
                        onClickOutside={() => setActiveAction(false)}
                    >
                        <button
                            onClick={() => setActiveAction(!activeAction)}
                            className="dark:text-white"
                        >
                            <i className="fa-regular fa-ellipsis-vertical"></i>
                        </button>
                    </SubMenu>
                </div>
                <div className="my-1 flex items-center flex-wrap text-gray-400">
                    <div className="flex items-center text-base">
                        <Link className="mr-1">Đen</Link>
                        <span className="mr-1">và</span>
                        <Link className="mr-1">Kimmese </Link>
                    </div>
                    <span className="mx-2 text-[5px]">
                        <i className="fa-solid fa-circle"></i>
                    </span>
                    <p className="text-base">47 Tr lượt xem</p>
                </div>
            </footer>
        </div>
    );
}

export default ItemSong;
