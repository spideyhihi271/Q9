import React, { useState } from 'react';
import Submenu from '../components/SubMenu';
import ListGrid from '../components/ListGrid';

function Playlist() {
    // Default
    const renderTest = [0, 1, 2, 3, 4, 5, 6, 7];
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
        <div>
            <header className="flex items-center justify-center">
                <img
                    className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-2xl"
                    src="https://ilikestatic.s3.ap-southeast-1.amazonaws.com/news/articles/thumb/GhSyIXb20YV6lE6YS1UevEf0FyTF4SoJlkr3MZIk.jpg"
                    alt=""
                />
                <div className="ml-5 lg:ml-10 flex-1">
                    <h1 className="mb-2 lg:mb-4 text-xl lg:text-3xl font-bold dark:text-white">
                        Tuyển tập nhạc nghe lại
                    </h1>
                    <div className="my-1 flex items-center text-sm text-gray-500">
                        <p className="hidden md:block">Danh sách phát</p>
                        <span className="hidden md:block mx-2 text-[5px]">
                            <i className="fa-duotone fa-circle"></i>
                        </span>
                        <p>Three Circel</p>
                        <span className="mx-2 text-[5px]">
                            <i className="fa-duotone fa-circle"></i>
                        </span>
                        <p>2023</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <p>87 bài hát</p>
                        <span className="mx-2 text-[5px]">
                            <i className="fa-duotone fa-circle"></i>
                        </span>
                        <p>6 giờ, 35 phút</p>
                    </div>
                    <p className="hidden md:block my-2 lg:my-5 text-sm text-gray-500">
                        Siêu tuyển tập nhạc của tôi, tuyển tập những ca khúc
                        thuộc nhiều thể loại nhạc bạn yêu thích. Danh sách này
                        được cập nhật liên tục.
                    </p>
                    <div className="flex items-center">
                        <button className="mr-2 px-2 flex items-center h-10 w-fit border rounded-full dark:bg-white">
                            <span className="w-8">
                                <i className="fa-regular fa-arrows-cross"></i>
                            </span>
                            <span className="hidden lg:block">Trộn bài</span>
                        </button>
                        <button className="my-2 mr-2 px-2 flex items-center h-10 w-fit border rounded-full dark:border-borderDark dark:text-white">
                            <span className="w-8">
                                <i className="fa-regular fa-arrows-cross"></i>
                            </span>
                            <span className="hidden md:block">
                                Lưu vào thư viện
                            </span>
                        </button>
                        <Submenu
                            data={actions}
                            visible={activeAction}
                            setVisible={setActiveAction}
                            onClickOutside={() => setActiveAction(false)}
                        >
                            <button
                                onClick={() => setActiveAction(!activeAction)}
                                className="w-8 h-8 rounded-full border dark:border-borderDark dark:text-white"
                            >
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        </Submenu>
                    </div>
                </div>
            </header>
            <main className="py-10">
                <ListGrid
                    title="Nội dung"
                    data={renderTest}
                    col={1}
                    showFullInfo
                />
            </main>
        </div>
    );
}

export default Playlist;
