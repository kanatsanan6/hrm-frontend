import axios, { AxiosRequestConfig } from "axios";

type FetchAPIParams = {
  url?: string;
  prefix?: string;
  path: string;
} & Omit<AxiosRequestConfig, "baseURL">;

type GetBaseUrlParams = {
  url: string;
  prefix: string;
  path: string;
};

const _axios = axios.create();

export function fetchAPI<T = any>({
  url = "http://localhost:3000",
  prefix = "",
  path,
  ...options
}: FetchAPIParams) {
  return _axios.request<T>({
    baseURL: getBaseUrl({ url, prefix, path }),
    ...options,
  });
}

function getBaseUrl({ url, prefix, path }: GetBaseUrlParams) {
  const urlObject = {
    url,
    ...(prefix && { prefix }),
    ...(path && { path }),
  };
  return Object.values(urlObject).join("");
}
