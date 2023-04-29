import { Axios } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { fetchAPI } from "@/lib/api";
import { getErrorMsg } from "@/lib/utils/getErrorMsg";
import { InviteUserPayload } from "../types";
import { USERS } from "../constant";

type Payload = {
  data: InviteUserPayload;
};

export const useInviteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Axios, Payload>(
    async ({ data }) => {
      await fetchAPI({
        path: "/api/v1/invite",
        method: "post",
        data,
      });
    },
    {
      async onSuccess() {
        await queryClient.refetchQueries(USERS);

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
