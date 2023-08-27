import React, { useState } from 'react';
import Submenu from '../SubMenu';
import { Link } from 'react-router-dom';

function ItemCommunity() {
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
            <header className="relative h-fit w-full overflow-hidden group">
                <div className="grid grid-cols-2 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-20 object-cover"
                        src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/2/b/4/0/2b40d1562edfef66b406050c1d25d337.jpg"
                        alt=""
                    />
                    <img
                        className="w-full h-20 object-cover"
                        src="https://i.ytimg.com/vi/WDA7OIXXW1U/maxresdefault.jpg"
                        alt=""
                    />
                    <img
                        className="w-full h-20 object-cover"
                        src="https://i.ytimg.com/vi/NXrTr-6zswo/maxresdefault.jpg"
                        alt=""
                    />
                    <img
                        className="w-full h-20 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeKT10svbV2t2DgvL0h3iCDw3u0TpX1PvjmpBphDTcEgTmN0GuWO5EcU4e_e7rDgIqtU&usqp=CAU"
                        alt=""
                    />
                </div>
                <div className="absolute z-0 inset-0 bg-black/30  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
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
                <div className="absolute z-10 bottom-2 left-2">
                    <Link>
                        <img
                            className="w-8 h-8 rounded-full overflow-hidden"
                            src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/274659376_318655500240616_4513126819384676810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DUnK36wZLv4AX9aW3y_&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCJIDUSk52A8JPx90SOQnMpIGW0tGmCPb0kMuKCFw1gBQ&oe=64EFC563"
                            alt=""
                        />
                    </Link>
                </div>
            </header>
            <footer className="my-2">
                <Link className=" text-black dark:text-white font-semibold hover:underline">
                    Ngủ trưa thoii
                </Link>
                <div className="flex items-center text-gray-500 text-sm">
                    <Link className="hover:underline">Spidey</Link>
                    <span className="mx-2 text-[5px]">
                        <i className="fa-sharp fa-solid fa-circle"></i>
                    </span>
                    <p>23 lượt xem</p>
                </div>
            </footer>
        </div>
    );
}

export default ItemCommunity;
