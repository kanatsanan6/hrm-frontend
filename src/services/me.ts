import { AxiosError } from "axios";
import { get } from "lodash";
import { UseQueryOptions, useQuery } from "react-query";

import { fetchAPI } from "@/lib/api";
import { Me, RawMe, RawUser, Rules, User } from "@/types";

const transformUser = (user: RawUser): User => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    companyId: user.company_id,
    role: user.role,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};

const transformMe = (raw: RawMe): Me => {
  return {
    user: transformUser(raw.user),
    policy: raw.policy as Rules,
  };
};

const getMe = async () => {
  const response = await fetchAPI({
    path: "/api/v1/me",
    method: "get",
  });

  const data = get(response, "data.data", []);

  return transformMe(data);
};

export const useMe = (options?: UseQueryOptions<Me>) => {
  return useQuery<Me>({
    queryKey: ["Me"],
    queryFn: () => getMe(),
    ...options,
  });
};
