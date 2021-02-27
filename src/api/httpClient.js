import axios from 'axios'

const getIdToken = () => localStorage.getItem('id_token')

const httpClient = (id_token) => {
    axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 1000, // indicates, 1000ms ie. 1 second
        headers: {
            "Content-Type": "application/json",
            "id_token" : id_token
        }
    });
}

const authInterceptor = (config) => {
    config.headers['id_token'] = getIdToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient