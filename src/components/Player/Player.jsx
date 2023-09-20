import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { loginSuccess } from '../../redux/authSlice';
import { playerSetPlaying, playerSetSong } from '../../redux/playerSlice';
import * as SongServices from '../../services/songService';
import checkLogger from '../../utils/checkLogger';
import { formatTimeSong } from '../../utils/formatUnit';

function Player() {
    const videoRef = useRef();
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            controls: 0,
            autoplay: 1,
        },
    };
    // State
    const userState = useSelector((state) => state.auth.login.user);
    const playerState = useSelector((state) => state.player);
    const dispath = useDispatch();
    const [isPlaying, setPlaying] = useState(true);
    const [curTime, setCurTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [isOnFavorite, setFavorite] = useState(false);

    // UseEffect
    useEffect(() => {
        setCurTime(0);
        setTotalTime(0);
        setPlaying(true);
        if (videoRef.current) {
            let timerId;
            let getData = async () => {
                const player = videoRef.current.internalPlayer;
                const totalVideo = await player.getDuration();
                setTotalTime(totalVideo);
                timerId = setInterval(() => {
                    handelChangeProcess();
                }, 1000);
            };
            getData();

            // Check Favorite
            let isFavorite = userState?.likeSongs.find(
                (item) => item.playerState.song._id,
            );
            setFavorite(isFavorite);

            return () => {
                clearInterval(timerId);
            };
        } else {
            setTotalTime(0);
        }
    }, [playerState.song?._id]);

    useEffect(() => {
        const updateSong = async () =>
            await SongServices.getByID(playerState.song?._id);
        updateSong();
    }, [playerState.song?._id]);
    // Handel
    const handelChangeProcess = async () => {
        if (videoRef.current) {
            const player = videoRef.current.internalPlayer;
            const playerState = await player.getPlayerState();
            if (playerState === 1) {
                let current = await player.getCurrentTime();
                current = Math.round(current);
                setCurTime(current);
            }
            if (playerState === 0) {
                handelNext();
            }
        }
    };
    const handelPlayPause = async () => {
        const player = videoRef.current;
        if (player) {
            const playerState = await player.internalPlayer.getPlayerState();
            if (playerState === 1) {
                player.internalPlayer.pauseVideo();
                dispath(playerSetPlaying(false));
                setPlaying(false);
            } else {
                player.internalPlayer.playVideo();
                dispath(playerSetPlaying(true));
                setPlaying(true);
            }
        }
    };
    const handelNext = async () => {
        let idx = playerState.playlist.findIndex(
            (item) => playerState.song._id == item._id,
        );
        let target;
        if (idx === playerState.playlist.length - 1)
            target = playerState.playlist[0];
        else target = playerState.playlist[idx + 1];
        dispath(playerSetSong(target));
    };
    const handelPrev = async () => {
        let idx = playerState.playlist.findIndex(
            (item) => playerState.song._id == item._id,
        );
        let target;
        if (idx === 0)
            target = playerState.playlist[playerState.playlist.length - 1];
        else if (idx === playerState.playlist.length - 1)
            target = playerState.playlist[0];
        else target = playerState.playlist[idx - 1];
        dispath(playerSetSong(target));
    };
    const handelChangeProgress = (e) => {
        if (videoRef.current) {
            let value = Number(e.target.value);
            value = Math.round((value / 100) * totalTime);
            const player = videoRef.current.internalPlayer;
            player.seekTo(value, true);
        }
    };
    const handelSaveOnFavorite = async () => {
        // Need Login
        if (checkLogger(userState, dispath) === true) {
            //Pass
            let data = await SongServices.saveOnFavorite(playerState.song._id);
            if (data) {
                let likeSongCopy = [...userState.likeSongs];
                if (isOnFavorite) {
                    likeSongCopy = likeSongCopy.filter(
                        (item) => item != playerState.song._id,
                    );
                } else {
                    likeSongCopy.push(playerState.song._id);
                }
                dispath(
                    loginSuccess({ ...userState, likeSongs: likeSongCopy }),
                );
                setFavorite(!isOnFavorite);
            }
        }
    };

    return (
        <>
            {playerState.song && (
                <div className="fixed bottom-0 left-0 z-50 w-screen bg-white dark:bg-bgDarkPlayer border dark:border-transparent transition-all">
                    <div className="mx-2 lg:mx-auto flex items-center h-16 lg:w-[90%]">
                        <YouTube
                            ref={videoRef}
                            videoId={playerState.song.song}
                            className="hidden"
                            opts={opts}
                        />
                        <div className="flex items-center order-last lg:-order-1 ">
                            <button
                                className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                                onClick={handelPrev}
                            >
                                <i className="fa-light fa-caret-left"></i>
                            </button>
                            <button
                                className="mx-2 lg:mx-4 w-10 h-10 lg:w-12 lg:h-12 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                                onClick={handelPlayPause}
                            >
                                {isPlaying ? (
                                    <i className="text-xl fa-regular fa-pause"></i>
                                ) : (
                                    <i className="fa-sharp fa-solid fa-play"></i>
                                )}
                            </button>
                            <button
                                className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                                onClick={handelNext}
                            >
                                <i className="fa-light fa-caret-right"></i>
                            </button>
                        </div>
                        <div className="mx-4 flex-1 flex items-center justify-center">
                            <img
                                className="w-10 h-10 rounded-xl object-cover"
                                src={playerState.song.thumb}
                                alt=""
                            />
                            <div className="mx-2 lg:mx-4 flex-1 text-sm">
                                <p className="font-medium dark:text-white line-clamp-1">
                                    {playerState.song.name}
                                </p>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {playerState.song.artist.map((art, idx) => (
                                        <span key={idx} className="mr-1">
                                            {idx == 0
                                                ? art.artName
                                                : `, ${art.artName}`}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <button
                                className="mx-2 w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                                onClick={handelSaveOnFavorite}
                            >
                                {isOnFavorite ? (
                                    <i className="fa-solid fa-heart text-red-500"></i>
                                ) : (
                                    <i className="fa-light fa-heart"></i>
                                )}
                            </button>
                        </div>
                        <div className="mx-8 flex-[1.5] hidden lg:flex items-center text-xs dark:text-white">
                            <p>{formatTimeSong(curTime)}</p>
                            <input
                                className="mx-4 flex-1 h-1 bg-gray-400 rounded-xl dark:bg-hoverDark hover:cursor-pointer transition-all"
                                type="range"
                                value={Math.floor((curTime / totalTime) * 100)}
                                onChange={(e) => handelChangeProgress(e)}
                            />
                            <p>
                                {formatTimeSong(totalTime - curTime).substring(
                                    0,
                                    5,
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Player;
