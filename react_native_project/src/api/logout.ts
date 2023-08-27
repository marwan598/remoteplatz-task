/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, {AxiosError} from 'axios';
import apiManager from './apiManage';

export const userLogout = async () => {
  try {
    const result = await apiManager('/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  } catch (error: any | AxiosError) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else {
      return 'Something went wrong Please try again';
    }
  }
};
