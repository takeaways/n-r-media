import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_APP_URL,
  params: {
    api_key: process.env.REACT_APP_APP_TOKEN,
    language: 'ko-KR',
  },
});

export default instance;
