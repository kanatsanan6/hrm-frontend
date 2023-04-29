import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

import { fetchAPI } from "@/lib/api";
import { ForgetPasswordParams } from "../types";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";

type Payload = {
  data: ForgetPasswordParams;
};

export const useForgetPassword = () => {
  return useMutation<void, AxiosError, Payload>(
    async ({ data }) => {
      await fetchAPI({
        path: "/api/v1/forget_password",
        method: "post",
        data,
      });
    },
    {
      onSuccess() {
        toast.success("Reset password link has been sent to your inbox", {
          autoClose: 2000,
          progress: undefined,
        });
      },
      onError(error) {
        const errorMsg = getErrorMsg(error);
        switch (errorMsg) {
          case "record not found":
            toast.error("Email not found", {
              autoClose: 2000,
              progress: undefined,
            });
            return;
          default:
            toast.error(errorMsg, {
              autoClose: 2000,
              progress: undefined,
            });
            return;
        }
      },
    }
  );
};
