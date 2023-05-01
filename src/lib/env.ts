import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const envConfig = {
  API_URL: publicRuntimeConfig.API_URL as string,
};
