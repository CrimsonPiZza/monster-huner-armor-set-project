import axios from 'axios'

const getIdToken = () => localStorage.getItem('id_token')

const httpClient = axios.create({
        baseURL: process.env.VUE_APP_BASE_API_URL,
        timeout: 10000, // indicates, 1000ms ie. 1 second
        headers: {
            "Content-Type": "application/json"
        }
    });

const authInterceptor = (config) => {
    config.headers['id_token'] = getIdToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient