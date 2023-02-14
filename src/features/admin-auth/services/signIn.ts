import { fetchAPI } from "@/lib/api";
import { setCookie } from "nookies";
import { toast } from "react-toastify";

import { COOKIE_ADMIN_TOKEN, EXPIRY, REMEMBER_EXPIRY } from "../constants";
import { SignUpParams } from "../types";

export const signInServices = () => {
  return {
    signIn: async (data: SignUpParams) => {
      const { remember, ...payload } = data;

      try {
        const response: any = await fetchAPI({
          path: "/admin_auth/sign_in",
          method: "post",
          data: payload,
        });

        const accessToken = response.data;

        setCookie(undefined, COOKIE_ADMIN_TOKEN, accessToken, {
          maxAge: remember ? REMEMBER_EXPIRY : EXPIRY,
          path: "/",
        });

        toast.success("Sign in successfully", {
          autoClose: 1000,
          progress: undefined,
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        toast.error("Email or Password is incorrect", {
          autoClose: 2000,
          progress: undefined,
        });
      }
    },
  };
};
