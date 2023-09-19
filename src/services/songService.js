import * as httpRequest from '../utils/httpRequest';

export const getAll = async (top = false, artist, category, full = false) => {
    try {
        const res = await httpRequest.get('/song/', {
            params: {
                top,
                artist,
                category,
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
        const res = await httpRequest.get('/song/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const saveOnFavorite = async (id) => {
    try {
        const res = await httpRequest.put('/song/favorite/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
