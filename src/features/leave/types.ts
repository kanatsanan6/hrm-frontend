export type LeaveType =
  | "vacation_leave"
  | "extra_vacation"
  | "sick_leave"
  | "business_leave";

export type Period = "all" | "first" | "second";

export type DateRangeValue = [Date | null, Date | null];

export type CreateLeaveParams = {
  leave_type: LeaveType;
  description: string;
  start_date: string;
  end_date: string;
  start_period: Omit<Period, "first">;
  end_period: Omit<Period, "second">;
};
