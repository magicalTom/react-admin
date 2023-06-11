import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use((config) => {
  // config.headers.set('token', `Bearer ${token}`);

  return config;
});

class Https {
  public post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return instance.post<T, AxiosResponse<T, D>, D>(url, data, config);
  }

  public get<T, P = unknown>(url: string, params?: P, config?: AxiosRequestConfig<P>) {
    return instance.get<T, AxiosResponse<T, P>, P>(url, { params, ...config });
  }
}

export default new Https();
