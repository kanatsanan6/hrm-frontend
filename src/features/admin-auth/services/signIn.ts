import { fetchAPI } from "@/lib/api";
import { setCookie } from "nookies";
import { toast } from "react-toastify";

import { COOKIE_ADMIN_TOKEN, EXPIRY } from "../constants";
import { SignUpParams } from "../types";

export const signInServices = () => {
  return {
    signIn: async (data: SignUpParams) => {
      try {
        const response: any = await fetchAPI({
          path: "/admin_auth/sign_in",
          method: "post",
          data,
        });

        const accessToken = response.data;

        setCookie(undefined, COOKIE_ADMIN_TOKEN, accessToken, {
          maxAge: EXPIRY,
        });

        toast.success("Sign in successfully", {
          autoClose: 1000,
          progress: undefined,
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
  };
};
