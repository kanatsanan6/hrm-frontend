import { fetchAPI } from "@/lib/api";
import { AxiosError } from "axios";
import { setCookie } from "nookies";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { COOKIE_ADMIN_TOKEN, EXPIRY, REMEMBER_EXPIRY } from "../constants";
import { SignInParams } from "../types";

type Payload = {
  data: SignInParams;
};

export const useSignIn = () => {
  return useMutation<void, AxiosError, Payload>(
    async ({ data }) => {
      const response: any = await fetchAPI({
        path: "/api/v1/sign_in",
        method: "post",
        data,
      });

      const accessToken = response.data.data.token;
      const expiry = response.data.data.expired_at;
      setCookie(undefined, COOKIE_ADMIN_TOKEN, accessToken, {
        maxAge: expiry ? (expiry * 1000 - new Date().getTime()) / 1000 : EXPIRY,
        path: "/",
      });
    },
    {
      onSuccess() {
        toast.success("Sign in successfully", {
          autoClose: 1000,
          progress: undefined,
        });
      },
      onError(error) {
        toast.error("Email or Password is incorrect", {
          autoClose: 2000,
          progress: undefined,
        });
      },
    }
  );
};
