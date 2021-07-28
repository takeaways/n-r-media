import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_APP_URL, // ?? 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_APP_TOKEN, //?? 'def604eb5a3e1c5dc74b8390a4fd10a3',
    language: 'ko-KR',
  },
});

export default instance;
