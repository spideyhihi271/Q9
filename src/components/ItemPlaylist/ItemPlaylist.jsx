import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import configs from '../../configs';

import Submenu from '../SubMenu';

function ItemPlaylist() {
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

    // Render
    return (
        <div className="w-full h-fit text-white">
            <header className="relative h-44 w-full rounded-xl overflow-hidden group">
                <img
                    className="w-full h-full object-cover "
                    src="https://ilikestatic.s3.ap-southeast-1.amazonaws.com/news/articles/thumb/GhSyIXb20YV6lE6YS1UevEf0FyTF4SoJlkr3MZIk.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-black/30  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                    <Submenu
                        data={actions}
                        visible={activeAction}
                        setVisible={setActiveAction}
                        onClickOutside={() => setActiveAction(false)}
                        placement="right"
                    >
                        <button
                            className=" absolute top-2 right-2 w-8 h-8 rounded-full dark:text-white hover:bg-hoverLight/10"
                            onClick={() => setActiveAction(!activeAction)}
                        >
                            <i className="fa-regular fa-ellipsis-vertical"></i>
                        </button>
                    </Submenu>
                    <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full text-sm dark:text-white hover:bg-bgDark hover:scale-110 transition-all">
                        <i className="fa-sharp fa-solid fa-play"></i>
                    </button>
                </div>
            </header>
            <footer className="my-2">
                <Link
                    to={configs.routes.playList}
                    className=" text-black dark:text-white font-semibold hover:underline"
                >
                    OPM Grind
                </Link>
                <p className="text-gray-400 text-sm">
                    Suni Hạ Linh, Ronboogz, Vũ Thảo My, AMEE
                </p>
            </footer>
        </div>
    );
}

export default ItemPlaylist;
