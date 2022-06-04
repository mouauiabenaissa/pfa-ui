import axios from 'axios';
import localStorageService from './localStorageService';
const apiHost = process.env.REACT_APP_APIURL;
const axiosInstance = axios.create({ baseURL: apiHost });
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorageService.getAccessToken();
        config.headers['X-User-Token'] = accessToken
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        if (error.response)
            if (error.response.status === 401) {
                localStorageService.clearToken();
                window.location.href = "/";
                console.log('401')
            } else return Promise.reject(error);
        else return Promise.reject(error);
    }
);
export default axiosInstance;