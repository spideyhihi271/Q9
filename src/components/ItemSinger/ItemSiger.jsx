import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import config from '../../configs';
import * as formatUnit from '../../utils/formatUnit';
import SubMenu from '../SubMenu';

function ItemSiger({ item, vertical = false }) {
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
        <>
            {!vertical ? (
                <Link to={`${config.routes.profile}/${item._id}`}>
                    <img
                        className="w-40 h-40 object-cover rounded-full overflow-hidden"
                        src={item.avatar}
                        alt=""
                    />
                    <main className="text-center">
                        <h3 className="mt-2 font-medium dark:text-white hover:underline">
                            {item.name}
                        </h3>
                        <p className=" font-medium text-gray-500 text-sm">
                            {formatUnit.formatUnit(item.follows)} người đăng kí
                        </p>
                    </main>
                </Link>
            ) : (
                <div className="py-3 flex items-center">
                    <img
                        className="w-10 h-10 lg:w-14 lg:h-14 object-cover rounded-full"
                        src={item.avatar}
                        alt=""
                    />
                    <div className="mx-3 flex-1">
                        <Link
                            to={`${config.routes.profile}/${item._id}`}
                            className="font-medium dark:text-white"
                        >
                            {item.name}
                        </Link>
                        <div className="my-1 flex items-center text-sm text-gray-500">
                            <p>Nghệ sĩ</p>
                            <span className="mx-2 text-[5px]">
                                <i className="fa-duotone fa-circle"></i>
                            </span>
                            <p>
                                {formatUnit.formatUnit(item.follows)} người đăng
                                kí
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemSiger;
