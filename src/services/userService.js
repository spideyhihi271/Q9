import * as httpRequest from '../utils/httpRequest';

export const getMyPlaylist = async () => {
    try {
        const res = await httpRequest.get('/user/myplaylist');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getHistorySong = async () => {
    try {
        const res = await httpRequest.get('/user/history/song');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getHistoryPlaylist = async () => {
    try {
        const res = await httpRequest.get('/user/history/song');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getLikeSongs = async () => {
    try {
        const res = await httpRequest.get('/user/likes');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFavoriteSongs = async () => {
    try {
        const res = await httpRequest.get('/user/favorite/song');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFavoritePlaylist = async () => {
    try {
        const res = await httpRequest.get('/user/favorite/playlist');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
