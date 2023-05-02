import { useMutation } from "react-query";
import { CreateLeaveParams } from "../types";
import { fetchAPI } from "@/lib/api";
import { Axios } from "axios";
import { toast } from "react-toastify";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";

type Payload = {
  data: CreateLeaveParams;
};

export const useCreateLeave = () => {
  return useMutation<void, Axios, Payload>(
    async ({ data }) => {
      await fetchAPI({
        path: "/api/v1/company/leaves",
        method: "post",
        data,
      });
    },
    {
      onSuccess() {
        toast.success("Invite user successfully", {
          autoClose: 1000,
          progress: undefined,
        });
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
