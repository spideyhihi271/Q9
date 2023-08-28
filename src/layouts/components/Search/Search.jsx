import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

function Search() {
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div
                    className="block w-96 h-full bg-white dark:dark:bg-secondDark border dark:border-borderDark rounded-lg overflow-hidden"
                    tabIndex="-1"
                    {...attrs}
                >
                    <Link
                        className="flex items-center h-12 dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark"
                        to={''}
                    >
                        <span className="w-10 text-center">
                            <i className="fa-light fa-magnifying-glass"></i>
                        </span>
                        <p className="text-sm">Search Suggestion</p>
                    </Link>
                </div>
            )}
        >
            <div className="flex w-96 h-10 border dark:border-transparent rounded-lg dark:bg-gray-900">
                <button className="h-full w-10 dark:text-white">
                    <i className="fa-light fa-magnifying-glass"></i>
                </button>
                <input
                    className="flex-1 outline-none text-sm bg-transparent  dark:text-white"
                    type="text"
                    placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast "
                />
                <button className="h-full w-10 dark:text-white">
                    <i className="fa-light fa-xmark"></i>
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
