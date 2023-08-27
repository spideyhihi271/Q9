import React, { useState } from 'react';
import Submenu from '../SubMenu';
import { Link } from 'react-router-dom';

function ItemSongVertical() {
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
        <Link className="px-2 py-3 flex items-center justify-between rounded-lg  hover:bg-hoverLight dark:hover:bg-hoverDark">
            <img
                className="w-14 h-14 rounded-lg object-cover"
                src="https://image-us.eva.vn/upload/2-2022/images/2022-04-29/1651219668-671-thumbnail-width640height480.jpg"
                alt=""
            />
            <div className="flex-1 mx-3">
                <p className="text-sm dark:text-white">There's No One At All</p>
                <p className="text-xs text-gray-400">
                    <Link className="hover:underline">Sơn Tùng MTP</Link>
                </p>
                <p className="text-xs text-gray-400">3 ngày trước</p>
            </div>
            <Submenu
                data={actions}
                visible={activeAction}
                setVisible={setActiveAction}
                onClickOutside={() => setActiveAction(false)}
            >
                <button
                    onClick={() => setActiveAction(!activeAction)}
                    className="w-10 h-10 rounded-full dark:text-white  hover:bg-bgDark/5 transition-all"
                >
                    <i className="fa-regular fa-ellipsis-vertical"></i>
                </button>
            </Submenu>
        </Link>
    );
}

export default ItemSongVertical;
