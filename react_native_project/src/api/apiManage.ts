import axios from 'axios';

export const apiManager = axios.create({
  baseURL: 'http://localhost:3500',
  responseType: 'json',
  withCredentials: true,
});
