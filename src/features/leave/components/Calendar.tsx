import { forwardRef, useRef, useState } from "react";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import dayjs from "dayjs";
import { Box, Input } from "@chakra-ui/react";

import { DISPLAY_FORMAT_DATE } from "../constant";
import { DateRangeValue } from "../types";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  onChange: (date?: DateRangeValue) => void;
};

export const Calendar = (props: Props) => {
  const [selected, setSelected] = useState<DateRangeValue>();
  const calendarRef = useRef<ReactDatePicker>(null);
  const { onChange } = props;

  const onSave = (date?: DateRangeValue) => {
    setSelected(date);
  };

  const CustomInput = forwardRef<HTMLInputElement>(
    ({ onClick, value }: any, ref) => {
      let display = undefined;
      if (value) {
        const date = value?.split(" - ");
        if (date.length > 1) {
          const startDate = dayjs(date[0]).format(DISPLAY_FORMAT_DATE);
          const endDate =
            date[1] !== "" ? dayjs(date[1]).format(DISPLAY_FORMAT_DATE) : "";

          display = `${startDate} - ${endDate}`;
        }
      }

      return (
        <Input
          value={display}
          ref={ref}
          placeholder="Select"
          onClick={onClick}
          onChange={() => {}}
        />
      );
    }
  );

  return (
    <Box width="100%">
      <DatePicker
        selectsRange={true}
        startDate={selected?.[0]}
        endDate={selected?.[1]}
        onCalendarClose={() => onChange?.(selected)}
        ref={calendarRef}
        onChange={(update: DateRangeValue) => onSave(update)}
        onChangeRaw={(e) => e.preventDefault}
        monthsShown={1}
        customInput={<CustomInput />}
      />
    </Box>
  );
};
