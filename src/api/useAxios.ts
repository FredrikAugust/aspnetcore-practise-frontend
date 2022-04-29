import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default function useAxios() {
  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const mutatedConfig = config;

    if (!mutatedConfig.url?.startsWith('http')) {
      mutatedConfig.url = `${import.meta.env.VITE_API_URL}${mutatedConfig.url}`;
    }

    if (mutatedConfig.headers?.['Content-Type'] === undefined) {
      mutatedConfig.headers!['Content-Type'] = 'application/json';
    }

    // if (mutatedConfig.headers?.Authorization === undefined) {
    //   mutatedConfig.headers!.Authorization = `Bearer ${await getAccessTokenSilently()}`;
    // }

    return mutatedConfig;
  });

  return {
    get: async <Data>(
      url: string,
      config?: AxiosRequestConfig<any> | undefined,
    ): Promise<AxiosResponse<Data>> => axios.get(url, config),
    delete: async <Data>(
      url: string,
      config?: AxiosRequestConfig<any> | undefined,
    ): Promise<AxiosResponse<Data>> => axios.delete(url, config),
    post: async <Data>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<any> | undefined,
    ): Promise<AxiosResponse<Data>> => axios.post(url, data, config),
    put: async <Data>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<any> | undefined,
    ): Promise<AxiosResponse<Data>> => axios.put(url, data, config),
    patch: async <Data>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<any> | undefined,
    ): Promise<AxiosResponse<Data>> => axios.patch(url, data, config),
  };
}
