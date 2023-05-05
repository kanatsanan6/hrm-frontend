import { useMutation, useQueryClient } from "react-query";
import { CreateLeaveParams } from "../types";
import { fetchAPI } from "@/lib/api";
import { Axios } from "axios";
import { toast } from "react-toastify";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";
import { LEAVES } from "../constant";

type Payload = {
  data: CreateLeaveParams;
};

export const useCreateLeave = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Axios, Payload>(
    async ({ data }) => {
      await fetchAPI({
        path: "/api/v1/company/leaves",
        method: "post",
        data,
      });
    },
    {
      async onSuccess() {
        await queryClient.refetchQueries(LEAVES);

        toast.success("Create leave successfully", {
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
