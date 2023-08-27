import axios from 'axios';
import {Platform} from 'react-native';

const apiManager = axios.create({
  baseURL: Platform.OS === 'android' ? '10.0.2.2' : 'http://localhost:3500',
  responseType: 'json',
  withCredentials: true,
});

export default apiManager;
