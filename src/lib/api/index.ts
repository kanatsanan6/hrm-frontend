import { getCredentials } from "@/features/auth/utils";
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
_axios.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getCredentials()}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
});

export function fetchAPI<T = any>({
  url = "http://localhost:3031",
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
