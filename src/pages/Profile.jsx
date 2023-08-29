import React, { useState } from 'react';
import Submenu from '../components/SubMenu';
import ListGrid from '../components/ListGrid';
import ListSlider from '../components/ListSlider';

function Profile() {
    // Default
    const renderTest = [0, 1, 2, 3];
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
            <header className="relative h-[70vh] w-full">
                <img
                    className="absolute inset-0 z-0 w-full h-full object-cover rounded-3xl"
                    src="https://i.ytimg.com/vi/CnZxamAbSnw/maxresdefault.jpg"
                    alt=""
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t dark:from-bgDark dark:to-black/30"></div>
                <footer className="absolute bottom-8 left-10 z-20">
                    <h1
                        className="my-7
                        text-3xl text-white font-bold"
                    >
                        Đen
                    </h1>
                    <p className="my-3 text-sm text-white">
                        Một người Việt chơi nhạc Rap. A Vietnamese boy who plays
                        Rap.
                    </p>
                    <div className="flex items-center text-sm">
                        <button className="mr-2 px-2 flex items-center h-9 w-fit border rounded-full bg-white">
                            <span className="w-8 text-base">
                                <i className="fa-regular fa-arrows-cross"></i>
                            </span>
                            <span>Trộn bài</span>
                        </button>
                        <button className="mr-2 px-2 flex items-center h-9 w-fit border rounded-full bg-white">
                            <span className="w-8 text-base">
                                <i className="fa-regular fa-signal-stream"></i>
                            </span>
                            <span>Đài phát</span>
                        </button>
                        <button className="mr-2 px-2 flex items-center h-9 w-fit border-2 border-red-600 rounded-full text-red-600 ">
                            <span className="font-bold mr-2">Đăng kí</span>
                            <span>47 Tr</span>
                        </button>
                        <Submenu
                            data={actions}
                            visible={activeAction}
                            setVisible={setActiveAction}
                            onClickOutside={() => setActiveAction(false)}
                        >
                            <button
                                onClick={() => setActiveAction(!activeAction)}
                                className="w-8 h-8 rounded-full text-white hover:bg-bgDark/20"
                            >
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        </Submenu>
                    </div>
                </footer>
            </header>
            <main className="my-5">
                <ListGrid
                    title="Bài hát"
                    data={renderTest}
                    col={1}
                    showFullInfo
                />
                <ListSlider
                    title="Đĩa nhạc"
                    data={renderTest}
                    itemRender={3}
                    slicePerView={6}
                />
                <ListSlider
                    title="Đĩa đơn"
                    data={renderTest}
                    itemRender={3}
                    slicePerView={6}
                />
                <ListSlider title="Video" data={renderTest} slicePerView={4} />
                <ListSlider
                    title="Người hâm mộ có thể cũng thích"
                    data={renderTest}
                    itemRender={2}
                    slicePerView={6}
                />
            </main>
        </div>
    );
}

export default Profile;
