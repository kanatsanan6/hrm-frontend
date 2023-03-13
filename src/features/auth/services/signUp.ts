import { fetchAPI } from "@/lib/api";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { SignUpParams } from "../types";

type Payload = {
  data: SignUpParams;
};

export const useSignUp = () => {
  return useMutation<void, AxiosError, Payload>(
    async ({ data }) => {
      await fetchAPI({
        path: "/api/v1/sign_up",
        method: "post",
        data,
      });
    },
    {
      onSuccess() {
        toast.success("Sign up successfully", {
          autoClose: 1000,
          progress: undefined,
        });
      },
      onError(error) {
        const errorMsg = getErrorMsg(error);
        switch (errorMsg) {
          case "duplicated email":
            toast.error("Email has already been used", {
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
