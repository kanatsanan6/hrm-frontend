import { get } from "lodash";

const DEFAULT_ERROR_MESSAGE = "Something went wrong";

export const getErrorMsg = (error: any) => {
  return get(error, "response.data.errors", DEFAULT_ERROR_MESSAGE);
};
