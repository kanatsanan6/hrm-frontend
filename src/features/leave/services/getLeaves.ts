import { fetchAPI } from "@/lib/api";
import { get } from "lodash";
import { transformLeave } from "../utils";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Leave } from "../types";
import { LEAVES } from "../constant";

const getLeaves = async () => {
  const response = await fetchAPI({
    path: "/api/v1/company/leaves",
    method: "get",
  });

  const data = get(response, "data.data", []);

  console.log(data);

  return data.map(transformLeave);
};

export const useLeaves = () => {
  return useQuery<Leave[], AxiosError>({
    queryKey: [LEAVES],
    queryFn: () => getLeaves(),
  });
};
