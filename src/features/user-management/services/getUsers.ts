import { AxiosError } from "axios";
import { get } from "lodash";
import { useQuery } from "react-query";

import { fetchAPI } from "@/lib/api";
import { transformUser } from "@/utils/transformUser";
import { User } from "@/types";
import { USERS } from "../constant";

const getUsers = async () => {
  const response = await fetchAPI({
    path: "/api/v1/company/users",
    method: "get",
  });

  const data = get(response, "data.data", []);

  return data.map(transformUser);
};

export const useUsers = () => {
  return useQuery<User[], AxiosError>({
    queryKey: [USERS],
    queryFn: () => getUsers(),
  });
};
