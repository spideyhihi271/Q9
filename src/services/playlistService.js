import * as httpRequest from '../utils/httpRequest';

export const getAll = async (
    top = false,
    type = 0,
    artist,
    category,
    community,
    full = false,
) => {
    try {
        const res = await httpRequest.get('/playlist', {
            params: {
                top,
                type,
                category,
                artist,
                community,
                full,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getByID = async (id) => {
    try {
        const res = await httpRequest.get('/playlist/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const postNewPlaylist = async (data) => {
    try {
        const res = await httpRequest.post('/playlist', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const putNewSongByID = async (id, idSong) => {
    try {
        const res = await httpRequest.put('/playlist/addSong/' + id, {
            song: idSong,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const saveOnFavorite = async (id) => {
    try {
        const res = await httpRequest.put('/playlist/favorite/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const updatePlaylistByID = async (id, data) => {
    try {
        const res = await httpRequest.put('/playlist/edit/' + id, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const deletedByID = async (id) => {
    try {
        const res = await httpRequest.deleted('/playlist/deleted/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
