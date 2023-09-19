import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Asset
import * as ArtistService from '../services/artistService';
import * as SongService from '../services/songService';
import * as PlaylistService from '../services/playlistService';
import {
    playerClear,
    playerSetPlaylist,
    playerSetSong,
} from '../redux/playerSlice';

// Component
import Submenu from '../components/SubMenu';
import ListGrid from '../components/ListGrid';
import ListSlider from '../components/ListSlider';
import { loginSuccess } from '../redux/authSlice';
import checkLogger from '../utils/checkLogger';
import Loader from '../components/Loader';

function Profile() {
    // Default
    const actions = [
        {
            title: 'Sao chép liên kết',
            icon: <i className="fa-regular fa-copy"></i>,
            func: () => {},
        },
    ];

    // State
    const dispath = useDispatch();
    const userState = useSelector((state) => state.auth.login.user);
    const [isFavorite, setFavorite] = useState(false);
    const idArtist = useParams().id;
    const [activeAction, setActiveAction] = useState(false);
    const [artist, setArtist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [singles, setSingles] = useState([]);
    const [artistRelated, setArtistRelated] = useState([]);
    const [fetching, setFetching] = useState(true);

    // Hooks
    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            // Get Artist
            let artist = await ArtistService.getByID(idArtist);
            setArtist(artist);

            // Get Song
            let songs = await SongService.getAll(
                1,
                artist._id,
                undefined,
                true,
            );
            setSongs(songs);

            // Get Playlist
            let playlists = await PlaylistService.getAll(
                1,
                0,
                artist._id,
                undefined,
                undefined,
                true,
            );
            setPlaylist(playlists);

            // Get Single
            let singles = await PlaylistService.getAll(
                1,
                1,
                artist._id,
                undefined,
                undefined,
                true,
            );
            setSingles(singles);

            // Get Artist
            let relateds = await ArtistService.getAll(1, artist._id);
            setArtistRelated(relateds);

            setFetching(false);
        };
        getData();
    }, [idArtist]);

    useEffect(() => {
        setFavorite(false);
        if (userState) {
            let index = userState.follows.findIndex((item) => item == idArtist);
            let isFavorite = index != -1 ? true : false;
            setFavorite(isFavorite);
        }
    }, [userState]);

    // Handle
    const handlePlay = () => {
        dispath(playerClear());
        dispath(playerSetSong(songs[0]));
        dispath(playerSetPlaylist(songs));
    };
    const handleAddFavorite = async () => {
        if (checkLogger(userState, dispath) === true) {
            let data = await ArtistService.addToFavoriteByID(idArtist);
            let user = { ...userState, follows: data };
            dispath(loginSuccess(user));
        }
    };

    // Render
    return (
        <>
            {fetching ? (
                <Loader />
            ) : (
                <div>
                    <header className="relative h-64 lg:h-[70vh] w-full">
                        <img
                            className="absolute inset-0 z-0 w-full h-full object-cover rounded-3xl"
                            src={artist.cover}
                            alt=""
                        />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t dark:from-bgDark dark:to-black/10"></div>
                        <footer className="absolute bottom-2 lg:bottom-8 left-2 lg:left-10 z-20">
                            <h1
                                className="lg:my-5 text-2xl
                        lg:text-3xl text-white font-bold"
                            >
                                {artist.name}
                            </h1>
                            <p className="my-2 lg:my-3 lg:w-3/4 text-xs lg:text-sm text-white">
                                {artist.description}
                            </p>
                            <div className="flex items-center text-sm">
                                <button
                                    className="mr-2 px-2 flex items-center h-9 w-fit border rounded-full bg-white"
                                    onClick={handlePlay}
                                >
                                    <span className="w-8 text-base">
                                        <i className="fa-regular fa-signal-stream"></i>
                                    </span>
                                    <span className="hidden lg:block">
                                        Đài phát
                                    </span>
                                </button>
                                <button
                                    className="mr-2 px-2  flex items-center h-9 w-fit border border-black rounded-full bg-black text-white"
                                    onClick={handleAddFavorite}
                                >
                                    {isFavorite ? (
                                        <>
                                            <span className="w-8 text-center">
                                                <i className="fa-light fa-plus"></i>
                                            </span>
                                            <span className="mx-2">
                                                Đã đăng kí
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="w-8 text-center">
                                                <i className="fa-light fa-plus"></i>
                                            </span>
                                            <span className="mx-2">
                                                Đăng kí
                                            </span>
                                        </>
                                    )}
                                </button>
                                <Submenu
                                    data={actions}
                                    visible={activeAction}
                                    setVisible={setActiveAction}
                                    onClickOutside={() =>
                                        setActiveAction(false)
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            setActiveAction(!activeAction)
                                        }
                                        className="w-8 h-8 rounded-full text-white hover:bg-bgDark/20"
                                    >
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                </Submenu>
                            </div>
                        </footer>
                    </header>
                    <main className="my-5 lg:my-7">
                        <div className="lg:w-3/4">
                            <ListGrid
                                title="Bài hát"
                                data={songs.slice(0, 10)}
                                col={1}
                            />
                        </div>
                        <ListSlider
                            title="Đĩa nhạc"
                            data={playlist}
                            itemRender={1}
                            slicePerView={6}
                        />
                        <ListSlider
                            title="Đĩa đơn"
                            data={singles}
                            itemRender={1}
                            slicePerView={6}
                        />
                        <ListSlider
                            title="Video"
                            data={songs.slice(10, songs.length)}
                            slicePerView={4}
                        />
                        <ListSlider
                            title="Người hâm mộ có thể cũng thích"
                            data={artistRelated}
                            itemRender={2}
                            slicePerView={6}
                        />
                    </main>
                </div>
            )}
        </>
    );
}

export default Profile;
