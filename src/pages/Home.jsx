import React, { useEffect, useState } from 'react';

import * as ArtistService from '../services/artistService';
import * as PlaylistService from '../services/playlistService';
import * as SongService from '../services/songService';

// Component
import ListSlider from '../components/ListSlider';
import TagList from '../components/TagList';
import Loader from '../components/Loader';

function Home() {
    // State
    const [fetching, setFetching] = useState(true);
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [singles, setSingles] = useState([]);
    const [artists, setArtists] = useState([]);
    const [communities, setCommunities] = useState([]);

    // Hooks
    useEffect(() => {
        let getData = async () => {
            let res;
            // Get Song recomend
            res = await SongService.getAll(top);
            setSongs(res);

            // Get Playlist recomend
            res = await PlaylistService.getAll(top);
            setPlaylists(res);

            // Get Single recomend
            res = await PlaylistService.getAll(false, 1);
            setSingles(res);

            // Get Artist recomend
            res = await ArtistService.getAll(true);
            setArtists(res);

            // Get Comunities recomend
            res = await PlaylistService.getAll();
            setCommunities(res);

            //Set Featch
            setFetching(false);
        };
        getData();
    }, []);

    return (
        <>
            {fetching ? (
                <Loader />
            ) : (
                <>
                    <TagList />
                    <ListSlider
                        title="Video nhạc đề xuất"
                        data={songs}
                        slicePerView={4}
                        slicePerMd={2.2}
                        slidePerSm={1.2}
                    />
                    <ListSlider
                        title="Tuyển tập nhạc cho bạn"
                        data={playlists}
                        itemRender={1}
                    />
                    <ListSlider
                        title="Đĩa nhạc đề xuất"
                        data={singles}
                        itemRender={1}
                    />
                    <ListSlider
                        title="Nghệ sĩ nổi bật"
                        subTitle="ĐỀ XUẤT CHO BẠN"
                        data={artists}
                        itemRender={2}
                        slicePerView={6}
                    />
                    <ListSlider
                        title="Danh sách phát thịnh hành"
                        subTitle="DÀNH CHO BẠN"
                        data={communities}
                        itemRender={1}
                        slicePerView={6}
                    />
                </>
            )}
        </>
    );
}

export default Home;
