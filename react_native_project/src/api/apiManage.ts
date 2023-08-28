import axios from 'axios';

export const apiManager = axios.create({
  baseURL: 'http://192.168.1.117:3500',
  responseType: 'json',
  withCredentials: true,
});
