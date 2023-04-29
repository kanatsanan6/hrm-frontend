import { destroyCookie, parseCookies } from "nookies";
import { COOKIE_ADMIN_TOKEN } from "./constants";

export const clearAuthCookie = () => {
  destroyCookie(undefined, COOKIE_ADMIN_TOKEN, { path: "/" });
};

export const getCredentials = () => {
  const cookies = parseCookies();

  return cookies[COOKIE_ADMIN_TOKEN];
};
