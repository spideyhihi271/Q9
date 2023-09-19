import * as httpRequest from '../utils/httpRequest';

export const getAll = async (top = false, related, full) => {
    try {
        const res = await httpRequest.get('/artist', {
            params: {
                top,
                related,
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
        const res = await httpRequest.get('/artist/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const addToFavoriteByID = async (id) => {
    try {
        const res = await httpRequest.put('/artist/addToFavorite/' + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
