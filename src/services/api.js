import axios from 'axios';

const api = axios.create({
    baseURL: 'http://club.pubjaiz.com.br',
});

export default api;