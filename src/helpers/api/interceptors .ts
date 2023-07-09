import axios from 'axios';
import { InternalAxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';

// axios.defaults.withCredentials = true;
// axios.defaults.credentials = 'include';
export const http = axios.create({
  baseURL: 'https://api.factmedia.in',
});

const requestHandler = (request: InternalAxiosRequestConfig<any>) => {
  request.headers['Content-type'] = 'application/json';
  return request;
};

const responseHandler = (response: AxiosResponse<any, any>) => {
  return response;
};

const errorHandler = (error: any) => {
  return Promise.reject(error);
};

http.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

http.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);
