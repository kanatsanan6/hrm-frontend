import { fetchAPI } from "@/lib/api";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";
import { Axios } from "axios";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { USERS } from "../constant";

type Payload = {
  id: number;
};

export const useDeleteUser = () => {
  const queryclient = useQueryClient();

  return useMutation<void, Axios, Payload>(
    async ({ id }) => {
      await fetchAPI({
        path: `/api/v1/company/users/${id}`,
        method: "delete",
      });
    },
    {
      async onSuccess() {
        await queryclient.refetchQueries(USERS);

        toast.success("Delete user successfully", {
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
