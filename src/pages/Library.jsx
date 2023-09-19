import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Assets
import * as userService from '../services/userService';

// Component
import ListSlider from '../components/ListSlider';
import NeedSignNotify from '../components/NeedSignNotify';
import Selector from '../components/Selector';
import Loader from '../components/Loader';

function Library() {
    // Defautl params
    const sortList = [
        {
            id: 0,
            title: 'Sắp xếp theo',
        },
        {
            id: 1,
            title: 'Gần nhất',
        },
        {
            id: 2,
            title: 'Xa nhất',
        },
    ];

    // State
    const loginState = useSelector((state) => state.auth.login);
    const [myPlaylist, setMyPlaylist] = useState([]);
    const [likeSongs, setLikeSongs] = useState([]);
    const [favoriteSongs, setFavoriteSongs] = useState([]);
    const [favoritePlaylists, setFavoritePlaylists] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [sort, setSort] = useState(sortList[0]);
    const [showSort, setShowSort] = useState(false);

    // Hooks
    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            // Get Like song
            let data = await userService.getMyPlaylist();
            setMyPlaylist(sort.id === 1 ? data : data.reverse());

            // Get Like song
            data = await userService.getLikeSongs();
            setLikeSongs(sort.id === 1 ? data : data.reverse());

            // Get Favorite song
            data = await userService.getFavoriteSongs();
            setFavoriteSongs(sort.id === 1 ? data : data.reverse());

            // Get Favorite Playlist
            data = await userService.getFavoritePlaylist();
            setFavoritePlaylists(sort.id === 1 ? data : data.reverse());

            setFetching(false);
        };
        if (loginState.user) getData();
    }, [sort]);

    // Render
    return (
        <div>
            <h1 className="lg:mb-10 text-3xl font-bold dark:text-white">
                Thư viện
            </h1>
            {!loginState.user ? (
                <NeedSignNotify />
            ) : (
                <>
                    <header className="flex flex-wrap items-center justify-between">
                        <p className="my-4 flex-1 text-gray-500">
                            Xem playlist, đĩa đơn và ca sĩ yêu thích của bạn.
                        </p>
                        <div className="relative w-full lg:w-fit">
                            <Selector
                                visible={showSort}
                                data={sortList}
                                selected={sort}
                                setSelected={setSort}
                                onClickOutside={() => setShowSort(false)}
                            >
                                <button
                                    className="flex items-center h-12 px-3 border dark:border-transparent rounded-3xl dark:text-white dark:bg-hoverDark transition-all"
                                    onClick={() => setShowSort(!showSort)}
                                >
                                    <p className="text-sm ">{sort.title}</p>
                                    <span className="w-8 text-center">
                                        <i className="fa-sharp fa-solid fa-caret-down"></i>
                                    </span>
                                </button>
                            </Selector>
                        </div>
                    </header>
                    <></>
                    {fetching ? (
                        <Loader />
                    ) : (
                        <main>
                            <ListSlider
                                title="Danh sách phát của bạn"
                                data={myPlaylist}
                                slicePerView={6}
                                itemRender={1}
                            />
                            <ListSlider
                                title="Video nhạc đã thích"
                                data={likeSongs}
                                slicePerView={4}
                                slicePerMd={2.2}
                                slidePerSm={1.2}
                            />
                            <ListSlider
                                title="Video nhạc đã lưu"
                                data={favoritePlaylists}
                                slicePerView={6}
                                itemRender={1}
                            />
                            <ListSlider
                                title="Video nhạc đã lưu"
                                data={favoriteSongs}
                                slicePerView={4}
                                slicePerMd={2.2}
                                slidePerSm={1.2}
                            />
                        </main>
                    )}
                </>
            )}
        </div>
    );
}

export default Library;
