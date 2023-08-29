/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from "axios";
import { apiManager } from "./apiManage";

interface Credentials {
  user: string;
  pwd: string;
}

export const userLogin = async (data: Credentials) => {
  try {
    const result = await apiManager("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error: any | AxiosError) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else {
      return "Something went wrong Please try again";
    }
  }
};
