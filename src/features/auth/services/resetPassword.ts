import { useMutation } from "react-query";
import { Axios } from "axios";
import { fetchAPI } from "@/lib/api";
import { ResetPasswordPayload } from "../types";
import { toast } from "react-toastify";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";

type Payload = {
  data: ResetPasswordPayload;
  token: string;
};

export const useResetPassword = () => {
  return useMutation<void, Axios, Payload>(
    async ({ data, token }) => {
      await fetchAPI({
        path: "/api/v1/reset_password",
        method: "put",
        data: {
          ...data,
          token,
        },
      });
    },
    {
      onSuccess() {
        toast.success("Sign in successfully", {
          autoClose: 1000,
          progress: undefined,
        });

        setTimeout(() => {
          window.location.href = "/sign-in";
        }, 1000);
      },
      onError(error) {
        const errorMsg = getErrorMsg(error);

        toast.error(errorMsg, {
          autoClose: 2000,
          progress: undefined,
        });
      },
    }
  );
};
