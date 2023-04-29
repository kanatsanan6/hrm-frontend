import { AxiosError } from "axios";
import { get } from "lodash";
import { useQuery } from "react-query";

import { fetchAPI } from "@/lib/api";
import { RawUser, User } from "@/types";

const transformUser = (user: RawUser): User => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    companyId: user.company_id,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};

const getMe = async () => {
  const response = await fetchAPI({
    path: "/api/v1/me",
    method: "get",
  });

  const data = get(response, "data.data", []);

  return transformUser(data);
};

export const useMe = () => {
  return useQuery<User, AxiosError>({
    queryKey: ["USERS"],
    queryFn: () => getMe(),
  });
};
