import * as httpRequest from '../utils/httpRequest';

export const signIn = async (data) => {
    try {
        const res = await httpRequest.post('/auth/signin', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (data) => {
    try {
        const res = await httpRequest.post('/auth/signup', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
