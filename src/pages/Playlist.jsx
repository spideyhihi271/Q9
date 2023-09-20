import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as PlaylistService from '../services/playlistService';
import * as SongService from '../services/songService';
import { formatDate, formatHoursMinus } from '../utils/formatUnit';

import ItemSong from '../components/ItemSong';
import Loader from '../components/Loader';
import Submenu from '../components/SubMenu';
import config from '../configs';
import { loginSuccess } from '../redux/authSlice';
import {
    modelSetChildren,
    modelSetOpen,
    modelSetParams,
} from '../redux/modalSlice';
import { playerSetPlaylist, playerSetSong } from '../redux/playerSlice';
import checkLogger from '../utils/checkLogger';

function Playlist() {
    // Default
    const actions = [
        {
            title: 'Sao chép liên kết',
            icon: <i className="fa-regular fa-copy"></i>,
            handle: () => {
                const currentDomain = window.location.hostname;
                const activeToast = () => toast('Liên kết đã được sao chép');
                activeToast();
                navigator.clipboard.writeText(
                    currentDomain + '/playlist/' + playlist._id,
                );
            },
        },
    ];
    const loggerActions = [
        ...actions,
        {
            title: 'Xóa danh sách phát',
            icon: <i className="fa-light fa-trash"></i>,
            handle: async () => {
                let data = await PlaylistService.deletedByID(playlist._id);
                if (data) {
                    navigate(config.routes.library);
                    const activeToast = () => toast('Đã xóa danh sách phát');
                    activeToast();
                }
            },
        },
    ];

    // State
    const dispath = useDispatch();
    const navigate = useNavigate();
    const idPlaylist = useParams().id;
    const userState = useSelector((state) => state.auth.login.user);
    const modalState = useSelector((state) => state.modal.open);
    const [isOwner, setOwner] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [playlist, setPlaylist] = useState(null);
    const [recommend, setRecommend] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [isOnFavorite, setFavorite] = useState(false);
    const [activeAction, setActiveAction] = useState(false);

    // Hooks
    useEffect(() => {
        let getData = async () => {
            let data = await PlaylistService.getByID(idPlaylist);
            const total = data.songs.reduce(
                (sum, item) => sum + item.duration,
                0,
            );
            let owner = data.owner.id == userState?._id;
            let isFavorite = false;
            if (userState?.favoritePlaylists) {
                let indexFavorite = userState?.favoritePlaylists.findIndex(
                    (item) => item === data._id,
                );
                if (indexFavorite != -1) isFavorite = true;
            }
            setFavorite(isFavorite);
            setOwner(owner);
            setTotalTime(total);
            dispath(playerSetPlaylist(data.songs));
            setPlaylist(data);
            setFetching(false);
            if (data.songs.length < 5) {
                let recommendPlaylist = await SongService.getAll(1);
                let result = [];
                data.songs.map((song) => {
                    let index = recommendPlaylist.findIndex(
                        (reSong) => reSong._id == song._id,
                    );
                    if (index != -1) recommendPlaylist.splice(index, 1);
                });
                setRecommend(recommendPlaylist);
            }
        };
        getData();
    }, [idPlaylist, modalState]);

    // Handle
    const toogleSong = async (item) => {
        if (checkLogger(userState, dispath) === true) {
            const data = await PlaylistService.putNewSongByID(
                idPlaylist,
                item._id,
            );
            if (data) {
                // Update Playlist
                let playlistCopy = { ...playlist };
                let index = playlistCopy.songs.findIndex(
                    (song) => song._id == item._id,
                );
                let newArray = [...playlistCopy.songs];
                if (index === -1) {
                    newArray.push(item);
                } else {
                    newArray = newArray.filter((song) => song._id != item._id);
                }
                const total = playlistCopy.songs.reduce(
                    (sum, item) => sum + item.duration,
                    0,
                );
                playlistCopy.songs = newArray;
                setTotalTime(total);
                setPlaylist(playlistCopy);
                // Update Recomemed
                let recomemedCopy = [...recommend];
                index = recomemedCopy.findIndex((song) => song._id == item._id);
                if (index > -1) recomemedCopy.splice(index, 1);
                setRecommend(recomemedCopy);
            }
        }
    };

    const handelEditPlaylist = () => {
        if (checkLogger(userState, dispath) === true) {
            dispath(modelSetChildren(2));
            dispath(modelSetParams(playlist));
            dispath(modelSetOpen(true));
        }
    };

    const handelSaveOnFavorite = async () => {
        if (checkLogger(userState, dispath) === true) {
            let data = await PlaylistService.saveOnFavorite(playlist._id);
            if (data) {
                let isDeleted = userState.favoritePlaylists.find(
                    (item) => item === playlist._id,
                )
                    ? true
                    : false;

                let favoriteCopy = [...userState.favoritePlaylists];
                if (isDeleted)
                    favoriteCopy = favoriteCopy.filter(
                        (item) => item != playlist._id,
                    );
                else favoriteCopy.push(playlist._id);
                dispath(
                    loginSuccess({
                        ...userState,
                        favoritePlaylists: favoriteCopy,
                    }),
                );
                setFavorite(!isDeleted);
                const activeToast = () => toast('Đã lưu vào danh sách phát');
                activeToast();
            }
        }
    };

    const handelStartStream = () => {
        dispath(playerSetSong(playlist.songs[0]));
    };

    return (
        <>
            {fetching ? (
                <Loader />
            ) : (
                <div>
                    <header className="my-5 flex justify-center">
                        {playlist.createdByAdmin ? (
                            <img
                                className="w-36 h-36 lg:w-60 lg:h-60 object-cover rounded-2xl"
                                src={playlist.thumb}
                                alt=""
                            />
                        ) : (
                            <>
                                {playlist.songs.length === 0 ? (
                                    <div className="flex items-center justify-center w-36 h-36 lg:w-60 lg:h-60 rounded-2xl border dark:border-gray-500">
                                        <span className="text-[50px] text-gray-500">
                                            <i className="fa-sharp fa-light fa-list-music"></i>
                                        </span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 w-36 h-36 lg:w-60 lg:h-60 bg-gray-100 dark:bg-slate-900 rounded-2xl overflow-hidden">
                                        {playlist.songs
                                            .slice(0, 4)
                                            .map((song) => (
                                                <div className="w-full h-full bg-black">
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={song.thumb}
                                                        alt=""
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </>
                        )}
                        <div className="ml-5 lg:ml-10 flex-1">
                            <h1 className="mb-2 lg:mb-4 text-xl lg:text-3xl font-bold dark:text-white">
                                {playlist.name}
                            </h1>
                            <div className="my-1 flex items-center text-sm text-gray-500">
                                <p>Danh sách phát</p>
                                <span className="hidden md:block mx-2 text-[5px]">
                                    <i className="fa-duotone fa-circle"></i>
                                </span>
                                <Link
                                    to={
                                        playlist.createdByAdmin
                                            ? ''
                                            : playlist.owner.id
                                    }
                                    className="hidden md:block"
                                >
                                    {playlist.createdByAdmin
                                        ? 'Three Circel'
                                        : playlist.owner.name}
                                </Link>
                                <span className="mx-2 text-[5px]">
                                    <i className="fa-duotone fa-circle"></i>
                                </span>
                                <p>{formatDate(playlist.updatedAt)}</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <p>{playlist.songs.length} bài hát</p>
                                <span className="mx-2 text-[5px]">
                                    <i className="fa-duotone fa-circle"></i>
                                </span>
                                <p>{formatHoursMinus(totalTime)}</p>
                            </div>
                            <p className="hidden md:block my-2 lg:my-5 text-sm text-gray-500">
                                {playlist.description}
                            </p>
                            <div className="flex items-center">
                                <button
                                    className="mr-2 px-2 flex items-center h-10 w-fit border rounded-full bg-black text-white dark:text-black dark:bg-white"
                                    onClick={handelStartStream}
                                >
                                    <span className="w-8 text-center">
                                        <i className="fa-light fa-signal-stream"></i>
                                    </span>
                                    <span className="hidden lg:block text-sm">
                                        Đài phát
                                    </span>
                                </button>
                                {isOwner ? (
                                    <button
                                        className="my-2 mr-2 px-2 flex items-center h-10 w-fit border rounded-full dark:border-borderDark dark:text-white"
                                        onClick={handelEditPlaylist}
                                    >
                                        <span className="w-8 text-center">
                                            <i className="fa-light fa-pen"></i>
                                        </span>
                                        <span className="hidden md:block text-sm">
                                            Chỉnh sửa danh sách phát
                                        </span>
                                    </button>
                                ) : (
                                    <button
                                        className="my-2 mr-2 px-2 flex items-center h-10 w-fit border rounded-full dark:border-borderDark dark:text-white"
                                        onClick={handelSaveOnFavorite}
                                    >
                                        {isOnFavorite ? (
                                            <>
                                                <span className="w-8 text-center">
                                                    <i className="fa-light fa-music"></i>
                                                </span>
                                                <span className="hidden md:block text-sm">
                                                    Xóa khỏi thư viện
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="w-8 text-center">
                                                    <i className="fa-light fa-music"></i>
                                                </span>
                                                <span className="hidden md:block text-sm">
                                                    Lưu vào thư viện
                                                </span>
                                            </>
                                        )}
                                    </button>
                                )}
                                <Submenu
                                    data={isOwner ? loggerActions : actions}
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
                                        className="w-8 h-8 rounded-full border dark:border-borderDark dark:text-white"
                                    >
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                </Submenu>
                            </div>
                        </div>
                    </header>
                    <main className="lg:py-10 lg:w-[85%]">
                        <div className="mb-2 lg:mb-5">
                            <h3 className="mb-3 lg:mb-5 font-bold text-lg lg:text-xl dark:text-white">
                                Nội dung
                            </h3>
                            {playlist.songs.length === 0 ? (
                                <p>Không có bài hát trong playlist này</p>
                            ) : (
                                <div className="grid grid-cols-1">
                                    {playlist.songs.map((item, idx) => (
                                        <>
                                            {isOwner ? (
                                                <ItemSong
                                                    key={idx}
                                                    item={item}
                                                    vertical
                                                    removeToPlaylist
                                                    handleRemoveToPlaylist={
                                                        toogleSong
                                                    }
                                                />
                                            ) : (
                                                <ItemSong
                                                    key={idx}
                                                    item={item}
                                                    vertical
                                                />
                                            )}
                                        </>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="my-2 lg:my-5">
                            <h3 className="mb-3 lg:mb-5 font-bold text-lg lg:text-xl dark:text-white">
                                Danh sách đề xuất
                            </h3>
                            <div className="grid grid-cols-1">
                                {recommend.map((item, idx) => (
                                    <>
                                        {isOwner ? (
                                            <ItemSong
                                                key={idx}
                                                item={item}
                                                vertical
                                                addToPlaylist
                                                handleAddToPlaylist={toogleSong}
                                            />
                                        ) : (
                                            <ItemSong
                                                key={idx}
                                                item={item}
                                                vertical
                                            />
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default Playlist;
