import axios from 'axios';

let AxiosInstance = null;

export const getAxiosInstance = () => {
  if (AxiosInstance) {
    return AxiosInstance;
  }

  AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1500,
  });

  return AxiosInstance;
};
