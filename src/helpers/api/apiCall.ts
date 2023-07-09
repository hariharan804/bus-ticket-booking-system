import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { http } from './interceptors ';

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

interface HttpRequestProps {
  (
    method: Method,
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    includeToken?: boolean,
    config?: Omit<AxiosRequestConfig, 'method' | 'url' | 'data'>,
  ): Promise<AxiosResponse<any, any>>;
}

export const apiCall: HttpRequestProps = (
  method = 'get',
  url,
  data = null,
  includeToken = false,
  config,
) => {
  const headers = {
    ...(includeToken && {
      Authorization: `Bearer HI`,
    }),
    ...(config?.headers ?? {}),
  };

  return http({
    method,
    url,
    data,
    headers,
    ...config,
  });
};
