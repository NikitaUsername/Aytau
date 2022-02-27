import axios from "axios";

const $api = axios.create({
    withCredentials: true
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalReq = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalReq._isRetry = true;
        try {
            const response = await axios.get('/api/auth/refresh', { withCredentials: true });
            localStorage.setItem('token', response.data.tokens.accessToken);
            return $api.request(originalReq)
        } catch (e) {
            console.log('Не авторизован!')
            throw error.response;
        }
    } else {
        return error.response
    }
})

export default $api; 