import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { useEffect } from 'react';

import { useDebouce } from '../../../hooks';
import config from '../../../configs';
import * as SearchServices from '../../../services/searchService';

function Search() {
    const navigate = useNavigate();
    const [showResult, setShowResult] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([[], [], []]);
    const keyword = useDebouce(searchValue, 800);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const getSearchValue = async () => {
            setFetching(true);
            const data = await SearchServices.searchByKeyword(keyword);
            setResults([...data[0], ...data[1], ...data[2]]);
            setFetching(false);
        };

        if (keyword.trim().length === 0) setResults([]);
        else {
            getSearchValue();
        }
    }, [keyword]);

    // Handle
    const hanldeClear = () => {
        setSearchValue('');
    };
    const handelSearch = (item = false) => {
        if (item) {
            navigate(config.routes.search + '/' + item.name);
        } else {
            console.log(keyword);
            navigate(config.routes.search + '/' + keyword);
        }
        setShowResult(false);
    };
    return (
        <Tippy
            appendTo={() => document.body}
            visible={showResult}
            onClickOutside={() => setShowResult(false)}
            interactive
            render={(attrs) => (
                <div
                    className="block w-96 h-full bg-white dark:dark:bg-secondDark dark:border-borderDark shadow-xl rounded-lg overflow-hidden"
                    tabIndex="-1"
                    {...attrs}
                >
                    {results.map((item, idx) => (
                        <button
                            key={idx}
                            className="flex items-center w-full h-12 dark:text-white hover:bg-hoverLight dark:hover:bg-hoverDark"
                            onClick={() => handelSearch(item)}
                        >
                            <span className="w-10 text-center">
                                <i className="fa-light fa-magnifying-glass"></i>
                            </span>
                            <p className="text-sm">{item.name}</p>
                        </button>
                    ))}
                </div>
            )}
        >
            <div className="flex w-96 h-10 border dark:border-transparent rounded-lg dark:bg-gray-900">
                <button
                    className="h-full w-10 dark:text-white"
                    onClick={() => handelSearch()}
                >
                    <i className="fa-light fa-magnifying-glass"></i>
                </button>
                <input
                    className="flex-1 outline-none text-sm bg-transparent  dark:text-white"
                    type="text"
                    placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast "
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {fetching && (
                    <button className="h-full w-10 dark:text-white">
                        <i className="fa-light fa-spinner-third fa-spin"></i>
                    </button>
                )}
                {!fetching && keyword.length > 0 && (
                    <button
                        className="h-full w-10 dark:text-white"
                        onClick={hanldeClear}
                    >
                        <i className="fa-light fa-xmark"></i>
                    </button>
                )}
            </div>
        </Tippy>
    );
}

export default Search;
