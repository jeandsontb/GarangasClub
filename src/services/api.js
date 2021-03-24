import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://club.pubjaiz.com.br',
    baseURL: 'http://apigarangas.pubjaiz.com.br/public/api',
});

export default api;