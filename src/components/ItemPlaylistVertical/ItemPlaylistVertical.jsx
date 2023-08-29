import React, { useState } from 'react';
import Submenu from '../SubMenu';
import { Link } from 'react-router-dom';

function ItemPlaylistVertical() {
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
        <div className="py-3 flex items-center">
            <img
                className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg object-cover"
                src="https://image-us.eva.vn/upload/2-2022/images/2022-04-29/1651219668-671-thumbnail-width640height480.jpg"
                alt=""
            />
            <div className="mx-3 flex-1">
                <Link className="font-medium dark:text-white">
                    R&B Soul thập niên 60
                </Link>
                <div className="my-1 flex items-center text-sm text-gray-500">
                    <p>Danh sách phát</p>
                    <span className="mx-2 text-[5px]">
                        <i className="fa-duotone fa-circle"></i>
                    </span>
                    <p>Three Circel</p>
                    <span className="mx-2 text-[5px]">
                        <i className="fa-duotone fa-circle"></i>
                    </span>
                    <p>2023</p>
                </div>
            </div>
            <div>
                <Submenu
                    data={actions}
                    visible={activeAction}
                    setVisible={setActiveAction}
                    onClickOutside={() => setActiveAction(false)}
                    placement="right"
                >
                    <button
                        className="w-8 h-8 rounded-full dark:text-white hover:bg-hoverLight/10"
                        onClick={() => setActiveAction(!activeAction)}
                    >
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </button>
                </Submenu>
            </div>
        </div>
    );
}

export default ItemPlaylistVertical;
