import * as httpRequest from '../utils/httpRequest';

export const searchByKeyword = async (keyword) => {
    try {
        const res = await httpRequest.get('/search/' + keyword);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
