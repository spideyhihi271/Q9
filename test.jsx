import React from 'react';

function test() {
    return (
        <div>
            <div className="fixed bottom-0 left-0 z-50 w-screen bg-white dark:bg-bgDarkPlayer border dark:border-transparent transition-all">
                <div className="mx-auto flex items-center h-16 w-[90%]">
                    <YouTube
                        ref={videoRef}
                        videoId={playerState.song.song}
                        className="hidden"
                        opts={opts}
                    />
                    <div className="flex items-center">
                        <button
                            className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                            onClick={handelPrev}
                        >
                            <i className="fa-light fa-caret-left"></i>
                        </button>
                        <button
                            className="mx-4 w-8 h-8 lg:w-12 lg:h-12 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                            onClick={handelPlayPause}
                        >
                            {isPlaying ? (
                                <i className="text-xl fa-regular fa-pause"></i>
                            ) : (
                                <i className="fa-sharp fa-light fa-play"></i>
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
                            className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl"
                            src="https://genk.mediacdn.vn/2019/5/4/anh-3-1556941856266584011285.png"
                            alt=""
                        />
                        <div className="mx-4 flex-1 text-sm">
                            <p className="font-medium dark:text-white">
                                {playerState.song.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {playerState.song.artist.map((art, idx) => (
                                    <span key={idx} className="mr-1">
                                        {idx == 0
                                            ? art.artName
                                            : `, ${art.artName}`}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div>
                            <button className="mx-2 w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                                <i className="fa-duotone fa-heart"></i>
                            </button>
                            <button className="mx-2 w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                                <i className="fa-regular fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mx-8 flex-[1.5] flex items-center text-xs dark:text-white">
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
                    <div className="flex-1 flex items-center">
                        <button className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                            <i className="fa-light fa-shuffle"></i>
                        </button>
                        <button className="mx-2 w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                            <i className="fa-light fa-rotate-left"></i>
                        </button>
                        <div className="flex-1 flex items-center">
                            <button className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                                <i className="fa-light fa-volume"></i>
                            </button>
                            <input
                                className="mx-4 flex-1 h-1 bg-gray-400 rounded-xl dark:bg-hoverDark hover:cursor-pointer transition-all"
                                type="range"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default test;
