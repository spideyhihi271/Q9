import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import config from '../../configs';
import {
    modelSetChildren,
    modelSetOpen,
    modelSetParams,
} from '../../redux/modalSlice';
import {
    playerClear,
    playerSetPlaylist,
    playerSetSong,
} from '../../redux/playerSlice';
import checkLogger from '../../utils/checkLogger';

import { formatTimeSong } from '../../utils/formatUnit';
import SubMenu from '../SubMenu';

function ItemSong({
    data,
    item,
    vertical = false,
    fromPlaylist = false,
    addToPlaylist = false,
    handleAddToPlaylist,
    removeToPlaylist = false,
    handleRemoveToPlaylist,
}) {
    // Default
    const actions = [
        {
            title: 'Bắt đầu đài phát',
            icon: <i className="fa-light fa-signal-stream"></i>,
            handle: () => {
                dispath(playerClear());
                dispath(playerSetSong(item));
                if (playerState.playlist.length === 0)
                    dispath(playerSetPlaylist(data));
                setActiveAction(false);
            },
        },
        {
            title: 'Phát tiếp theo',
            icon: <i className="fa-regular fa-forward"></i>,
            handle: () => {
                let playlist = playerState.playlist;
                playlist = playlist.filter((song) => item._id != song._id);
                let idx = playlist.findIndex(
                    (song) => playerState.song._id == song._id,
                );
                playlist.splice(idx + 1, 0, item);
                dispath(playerSetPlaylist(playlist));
                const activeToast = () => toast('Đã thêm vào danh sách phát');
                activeToast();
                setActiveAction(false);
            },
        },
        {
            title: 'Thêm vào danh sách',
            icon: <i className="fa-regular fa-circle-plus"></i>,
            handle: () => {
                let playlist = playerState.playlist;
                playlist = playlist.filter((song) => item._id != song._id);
                playlist.push(item);
                dispath(playerSetPlaylist(playlist));
                const activeToast = () => toast('Đã thêm vào danh sách phát');
                activeToast();
                setActiveAction(false);
            },
        },
        {
            title: 'Thêm vào playlists',
            icon: <i className="fa-regular fa-music"></i>,
            handle: () => {
                setActiveAction(false);
                // Need Login
                if (checkLogger(userState, dispath) === true) {
                    //Passs;
                    dispath(modelSetParams(item._id));
                    dispath(modelSetChildren(0));
                    dispath(modelSetOpen(true));
                }
            },
        },
    ];
    // State
    const dispath = useDispatch();
    const playerState = useSelector((state) => state.player);
    const userState = useSelector((state) => state.auth.login.user);
    const [activeAction, setActiveAction] = useState(false);

    return (
        <>
            {!vertical ? (
                <div className="w-full">
                    <div onClick={() => actions[0].handle()}>
                        <header className="relative h-44 w-full group cursor-pointer rounded-2xl overflow-hidden">
                            <div className="absolute z-10 inset-0 bg-black/5 group-hover:bg-black/40"></div>
                            <div className="absolute top-2 right-2 z-10 text-white text-xs py-1 px-2  rounded-2xl overflow-hidden backdrop-blur bg-white/30 ">
                                #Now Treding
                            </div>
                            <img
                                className="absolute z-0 inset-0 w-full h-full object-cover"
                                src={item.thumb}
                                alt=""
                            />
                            <button className="absolute top-1/2 left-1/2 z-20 translate-x-[-50%] translate-y-[-50%] w-10 h-10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all">
                                <i className="fa-sharp fa-solid fa-play"></i>
                            </button>
                        </header>
                    </div>
                    <footer className="my-2">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold dark:text-white line-clamp-1 lg:line-clamp-2">
                                {item.name}
                            </p>
                            <SubMenu
                                data={actions}
                                visible={activeAction}
                                setVisible={setActiveAction}
                                onClickOutside={() => setActiveAction(false)}
                            >
                                <button
                                    onClick={() =>
                                        setActiveAction(!activeAction)
                                    }
                                    className="dark:text-white"
                                >
                                    <i className="fa-regular fa-ellipsis-vertical"></i>
                                </button>
                            </SubMenu>
                        </div>
                        <div className="my-1 flex items-center flex-wrap text-gray-400">
                            <div className="flex items-center text-base">
                                {item.artist.map((art, idx) => (
                                    <Link
                                        key={idx}
                                        to={`${config.routes.profile}/${art.artId}`}
                                        className="mr-1 text-sm"
                                    >
                                        {idx == 0
                                            ? art.artName
                                            : `, ${art.artName}`}
                                    </Link>
                                ))}
                            </div>
                            <span className="mx-2 text-[5px]">
                                <i className="fa-solid fa-circle"></i>
                            </span>
                            <p className="text-sm">{item.views} lượt xem</p>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="my-4 flex items-center rounded-lg">
                    <img
                        className="w-12 h-12 object-cover rounded-lg"
                        src={item.thumb}
                        alt=""
                    />
                    <div
                        onClick={() => actions[0].handle()}
                        className="mx-3 line-clamp-1 flex-1 text-sm font-medium dark:text-white hover:underline cursor-pointer"
                    >
                        {item.name}
                    </div>
                    <div className="flex-1 line-clamp-1">
                        {item.artist.map((art, idx) => (
                            <Link
                                key={idx}
                                to={config.routes.profile + '/' + art.artId}
                                className="text-sm text-gray-500 hover:underline"
                            >
                                {idx > 0 ? ', ' + art.artName : art.artName}
                            </Link>
                        ))}
                    </div>
                    <p className="flex-1 text-center text-sm text-gray-500">
                        {formatTimeSong(item.duration)}
                    </p>
                    <SubMenu
                        data={actions}
                        visible={activeAction}
                        setVisible={setActiveAction}
                        onClickOutside={() => setActiveAction(false)}
                    >
                        <button
                            className="mx-1 flex items-center justify-center w-6 h-6  rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all"
                            onClick={() => setActiveAction(!activeAction)}
                        >
                            <i className="text-xs fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </SubMenu>
                    {addToPlaylist && (
                        <button
                            className="mx-5 flex items-center justify-center w-6 h-6  rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all"
                            onClick={() => handleAddToPlaylist(item)}
                        >
                            <i className="fa-sharp fa-light fa-plus"></i>
                        </button>
                    )}
                    {removeToPlaylist && (
                        <button
                            className="mx-5 flex items-center justify-center w-6 h-6  rounded-full border dark:border-transparent dark:text-white dark:bg-hoverDark hover:scale-90 transition-all"
                            onClick={() => handleRemoveToPlaylist(item)}
                        >
                            <i className="fa-light fa-trash"></i>
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default ItemSong;
