import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Assets
import * as UserService from '../services/userService';

// Component
import NeedSignNotify from '../components/NeedSignNotify';
import ListGrid from '../components/ListGrid';
import Loader from '../components/Loader';

function History() {
    // State
    const loginState = useSelector((state) => state.auth.login);
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [featching, setFeatching] = useState(true);

    // Hooks
    useEffect(() => {
        const getData = async () => {
            setFeatching(true);
            let data = await UserService.getHistorySong();
            console.log(data);
            setSongs(data);
            setFeatching(false);
        };
        if (loginState.user) getData();
    }, [loginState]);

    // Render
    return (
        <div>
            <header>
                <h1 className="lg:mb-10 text-3xl font-bold dark:text-white">
                    Lịch sử
                </h1>
            </header>
            <main className="mt-4">
                {loginState.user ? (
                    <>
                        {featching ? (
                            <Loader />
                        ) : (
                            <>
                                <ListGrid
                                    title="Nghe gần đây"
                                    data={songs.slice(0, 6)}
                                    col={1}
                                    fullDefault
                                />
                                <ListGrid
                                    title="Từ trước đến nay"
                                    data={songs.slice(6)}
                                    col={1}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <NeedSignNotify />
                )}
            </main>
        </div>
    );
}

export default History;
