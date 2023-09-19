import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import configs from '../../configs';

import Submenu from '../SubMenu';
import { toast } from 'react-toastify';

function ItemPlaylist({ item, vertical = false }) {
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
                    currentDomain + '/playlist/' + item._id,
                );
                setActiveAction(false);
            },
        },
    ];

    // State
    const [activeAction, setActiveAction] = useState(false);

    // Render
    return (
        <>
            {!vertical ? (
                <div className="w-full h-fit text-white">
                    <header className="relative h-44 w-full rounded-xl overflow-hidden group">
                        <img
                            className="w-full h-full object-cover "
                            src={item.thumb}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-black/30  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                            <Submenu
                                data={actions}
                                visible={activeAction}
                                setVisible={setActiveAction}
                                onClickOutside={() => setActiveAction(false)}
                                placement="right"
                            >
                                <button
                                    className=" absolute top-2 right-2 w-8 h-8 rounded-full dark:text-white hover:bg-hoverLight/10"
                                    onClick={() =>
                                        setActiveAction(!activeAction)
                                    }
                                >
                                    <i className="fa-regular fa-ellipsis-vertical"></i>
                                </button>
                            </Submenu>
                            <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full text-sm dark:text-white hover:bg-bgDark hover:scale-110 transition-all">
                                <i className="fa-sharp fa-solid fa-play"></i>
                            </button>
                        </div>
                    </header>
                    <footer className="my-2">
                        <Link
                            to={`${configs.routes.playList}/${item._id}`}
                            className="line-clamp-1 text-black dark:text-white font-semibold hover:underline"
                        >
                            {item.name}
                        </Link>
                        <p className="text-gray-400 text-sm">
                            {item.artists?.slice(0, 4).map((art, idx) => (
                                <span key={idx}>
                                    {idx == 0 ? art.name : `, ${art.name}`}
                                </span>
                            ))}
                        </p>
                    </footer>
                </div>
            ) : (
                <div className="py-3 flex items-center">
                    <img
                        className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg object-cover"
                        src={item.thumb}
                        alt=""
                    />
                    <div className="mx-3 flex-1">
                        <Link
                            to={`${configs.routes.playList}/${item._id}`}
                            className="font-medium dark:text-white"
                        >
                            {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">Danh sách phát</p>
                    </div>
                    <div>
                        <Submenu
                            data={actions}
                            visible={activeAction}
                            setVisible={setActiveAction}
                            onClickOutside={() => setActiveAction(false)}
                            placement="right"
                        >
                            <button
                                className="w-8 h-8 rounded-full dark:text-white hover:bg-hoverLight/10"
                                onClick={() => setActiveAction(!activeAction)}
                            >
                                <i className="fa-regular fa-ellipsis-vertical"></i>
                            </button>
                        </Submenu>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemPlaylist;
