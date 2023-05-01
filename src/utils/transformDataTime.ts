import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/th";

const DEFAULT_DATE_TIME_FORMAT = "DD-MM-YYYY HH:mm";

export const formatDateTime = (
  date: string | Dayjs,
  format?: string
): string => {
  return dayjs(date)
    .locale("th")
    .add(543, "year")
    .format(format ?? DEFAULT_DATE_TIME_FORMAT);
};
