import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as SearchServices from '../services/searchService';
import SearchBox from '../layouts/components/Search';
import ListGrid from '../components/ListGrid';
import Loader from '../components/Loader';

function Search() {
    const keyword = useParams().keyword;
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylist] = useState([]);
    const [artists, setArtists] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            const res = await SearchServices.searchByKeyword(
                keyword.toLocaleLowerCase(),
            );
            setSongs(res[0]);
            setPlaylist(res[1]);
            setArtists(res[2]);
            setFetching(false);
        };
        if (keyword.length > 0) {
            getData();
        }
    }, [keyword]);
    return (
        <div className="lg:w-[70%]">
            <div className="w-full lg:hidden mb-5">
                <SearchBox />
            </div>
            {fetching ? (
                <Loader />
            ) : (
                <>
                    {[...songs, ...playlists, ...artists].length === 0 ? (
                        <h1 className="my-10 text-center lg:text-left">
                            Không tìm thấy nội dung phù hợp
                        </h1>
                    ) : (
                        <>
                            <ListGrid title="Bài hát" data={songs} />
                            <ListGrid
                                title="Đĩa nhạc"
                                data={playlists}
                                item={1}
                                fullDefault
                            />
                            <ListGrid
                                title="Nghệ sĩ"
                                data={artists}
                                item={2}
                                fullDefault
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Search;
