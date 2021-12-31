import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL || `http://localhost:3333`,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem(`@InterBank:token`) || ``;
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});
