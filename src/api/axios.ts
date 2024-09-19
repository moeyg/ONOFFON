import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '6d7129babba0aae305ad9e70e888862b',
    language: 'ko-KR',
  },
});

export default instance;
