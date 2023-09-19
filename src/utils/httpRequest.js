import axios from 'axios';
import { store } from '../redux/store';

const httpRequest = axios.create({
    baseURL: 'https://q9-api.vercel.app/api',
});

// Intercepter
httpRequest.interceptors.request.use((config) => {
    const logger = store.getState().auth.login.user;
    let token;
    if (logger) {
        token = logger.token;
        // Đính token
        config.headers.Authorization = `Beare ${token}`;
    }
    return config;
});

export const get = async (path, options = {}, config = {}) => {
    const response = await httpRequest.get(path, options, config);
    return response.data;
};

export const post = async (path, data = {}, config = {}) => {
    const response = await httpRequest.post(path, data, config);
    return response.data;
};

export const put = async (path, data = {}, config = {}) => {
    const response = await httpRequest.put(path, data, config);
    return response.data;
};

export const deleted = async (path, data = {}, config = {}) => {
    const response = await httpRequest.delete(path, data, config);
    return response.data;
};

export default httpRequest;
