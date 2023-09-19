import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { modelSetChildren } from '../../redux/modalSlice';
import * as PlaylistService from '../../services/playlistService';
import * as userService from '../../services/userService';
import Loader from '../Loader';

function PlaylistBox({ handelCloseModal }) {
    // State
    const userState = useSelector((state) => state.auth.login);
    const modalState = useSelector((state) => state.modal);
    const dispath = useDispatch();
    const [playlists, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updateTime, setUpdateTime] = useState(0);

    // Hooks
    useEffect(() => {
        const getData = async () => {
            let data = await userService.getMyPlaylist();
            setPlaylist(data);
            setLoading(false);
        };
        getData();
    }, [updateTime]);

    // Handel
    const handelSave = async (id, idSong) => {
        const data = await PlaylistService.putNewSongByID(
            id,
            modalState.sideParams,
        );
        setUpdateTime(updateTime + 1);
        const activeToast = () => toast('Đã thêm vào playlist');
        activeToast();
        handelCloseModal();
    };
    const handelCreateNew = () => {
        dispath(modelSetChildren(1));
    };

    return (
        <div className="py-3 px-5 w-[500px]">
            <header className="pb-5 flex items-center justify-between">
                <h3 className="text-xl font-medium">Lưu vào danh sách phát</h3>
                <button
                    className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                    onClick={handelCloseModal}
                >
                    <i className="fa-light fa-xmark"></i>
                </button>
            </header>
            <main className="my-2">
                <div className="block min-h-[300px]">
                    {loading ? (
                        <div className="w-full min-h-[300px] flex items-center justify-center dark:text-white">
                            <p>Đang tải...</p>
                        </div>
                    ) : (
                        <>
                            {playlists.length === 0 ? (
                                <div className="h-full flex items-center justify-center">
                                    <p>Bạn chưa tạo playlist nào</p>
                                </div>
                            ) : (
                                <>
                                    {playlists.map((item, idx) => (
                                        <button
                                            key={idx}
                                            className="mb-2 flex items-center dark:text-white"
                                            onClick={() => handelSave(item._id)}
                                        >
                                            <img
                                                className="w-14 h-14 border rounded-2xl object-cover"
                                                src={item.thumb}
                                                alt=""
                                            />
                                            <div className="mx-2 lg:mx-4 text-left text-sm">
                                                <p className="text-base font-medium line-clamp-1">
                                                    {item.name}
                                                </p>
                                                <p className="my-[1px] text-gray-500 line-clamp-1">
                                                    {item.artists.map(
                                                        (art, idx) => (
                                                            <span key={idx}>
                                                                {idx > 0
                                                                    ? ', ' +
                                                                      art.name
                                                                    : art.name}
                                                            </span>
                                                        ),
                                                    )}
                                                </p>
                                                <p className=" text-xs text-gray-500">
                                                    {item.songs.length} bài hát
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className="flex items-center justify-end">
                    <button
                        className="px-3 h-10 text-sm rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                        onClick={handelCreateNew}
                    >
                        Tạo Playlist mới
                    </button>
                </div>
            </main>
        </div>
    );
}

export default PlaylistBox;
