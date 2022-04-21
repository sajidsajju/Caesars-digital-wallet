import axios from 'axios';
import config from '../../config/config';

const instance = axios.create({
  baseURL: config.apiBaseURL,
  timeout: config.timeout,
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
