import React, { useState } from 'react';
import ListSlider from '../components/ListSlider';
import ListGrid from '../components/ListGrid';
import ItemSongVertical from '../components/ItemSongVertical';
import Switch from '../components/Switch';
import SubMenu from '../components/SubMenu';

// Asset
import video from '../assets/videos/musicVideo.mp4';

function Watch() {
    // Default
    const renderTest = [0, 1, 2, 3];
    const viewList = ['TIẾP THEO', 'LỜI NHẠC', 'LIÊN QUAN'];
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
    const [caseInfo, setCaseInfo] = useState(0);
    const [activeAction, setActiveAction] = useState(false);

    return (
        <section className="flex">
            <div className="flex-1">
                <video
                    className="w-full h-96"
                    src={video}
                    autoPlay
                    controls
                ></video>
                <div className="my-2">
                    <p className="font-semibold dark:text-white">
                        Kimmese - Loving You Sunny ft. Đen (Prod.by Touliver)
                    </p>
                    <div className="my-3 flex items-center justify-between">
                        <div className="flex-1 flex items-center">
                            <img
                                className="w-10 h-10 rounded-lg"
                                src="https://ilikestatic.s3.ap-southeast-1.amazonaws.com/news/articles/thumb/GhSyIXb20YV6lE6YS1UevEf0FyTF4SoJlkr3MZIk.jpg"
                                alt=""
                            />
                            <div className="flex-1 mx-2">
                                <p className="mb-1 font-medium text-sm dark:text-white">
                                    Kimmese Official
                                </p>
                                <p className="text-xs text-gray-600">
                                    94.5 N người đăng kí
                                </p>
                            </div>
                        </div>
                        <nav className="flex items-center">
                            <button className="mx-1 w-10 h-10 rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all">
                                <i className="fa-sharp fa-regular fa-heart"></i>
                            </button>
                            <button className="mx-1 w-10 h-10 rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all">
                                <i className="fa-regular fa-plus"></i>
                            </button>
                            <SubMenu
                                data={actions}
                                visible={activeAction}
                                setVisible={setActiveAction}
                                onClickOutside={() => setActiveAction(false)}
                            >
                                <button
                                    className="mx-1 w-10 h-10 rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all"
                                    onClick={() =>
                                        setActiveAction(!activeAction)
                                    }
                                >
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                            </SubMenu>

                            <button className="mx-1 px-5 w-fit h-10 text-sm rounded-full border dark:border-transparent dark:text-black dark:bg-white hover:scale-90 transition-all">
                                Đăng kí
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="ml-8 w-[40%]">
                <header className="h-10 flex items-center border-b-[1px] dark:border-b-gray-600">
                    {viewList.map((item, idx) => (
                        <button
                            className={`flex-1 h-full text-gray-600 font-medium transition-all ${
                                caseInfo === idx
                                    ? 'text-black dark:text-white border-b-2 border-b-black dark:border-b-white'
                                    : ''
                            }`}
                            onClick={() => setCaseInfo(idx)}
                        >
                            {item}
                        </button>
                    ))}
                </header>
                <main className="my-2 h-[70vh] overflow-y-auto ">
                    <div>
                        {caseInfo === 0 && (
                            <div className="my-2">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <p className="font-semibold dark:text-white">
                                            Tự động phát
                                        </p>
                                        <p className="w-3/4 text-gray-600 text-xs">
                                            Thêm nội dung tương tự vào cuối danh
                                            sách chờ
                                        </p>
                                    </div>
                                    <div>
                                        <Switch />
                                    </div>
                                </div>
                                <ItemSongVertical />
                                <div>
                                    <p className=" font-semibold dark:text-white">
                                        Nội dung tương tự
                                    </p>
                                    <p className="w-3/4 text-gray-600 text-xs">
                                        Những nội dung tương tự với 'Chúng ta
                                        không thuộc về nhau'
                                    </p>
                                    <ListGrid data={renderTest} col={1} />
                                </div>
                            </div>
                        )}
                        {caseInfo === 1 && <></>}
                        {caseInfo === 2 && (
                            <>
                                <ListSlider
                                    title="Các trình diễn khác"
                                    data={renderTest}
                                    slicePerView={2}
                                />
                                <ListSlider
                                    title="Danh sách phát đề xuất"
                                    data={renderTest}
                                    slicePerView={2}
                                    itemRender={1}
                                />
                                <ListSlider
                                    title="Nghệ sĩ tương tự"
                                    data={renderTest}
                                    itemRender={2}
                                    slicePerView={2}
                                />
                            </>
                        )}
                    </div>
                </main>
            </div>
        </section>
    );
}

export default Watch;
