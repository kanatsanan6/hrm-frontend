export type LeaveTypeName =
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
};

export type LeaveStatus = "pending" | "approved" | "rejected";

export type RawLeaveType = {
  id: number;
  name: LeaveTypeName;
  usage: number;
  max: number;
  created_at: string;
  updated_at: string;
};

export type LeaveType = {
  id: number;
  name: LeaveTypeName;
  usage: number;
  max: number;
  createdAt: string;
  updatedAt: string;
};

export type RawLeave = {
  id: number;
  description: string;
  status: LeaveStatus;
  start_date: string;
  end_date: string;
  leave_type: RawLeaveType;
  created_at: string;
  updated_at: string;
};

export type Leave = {
  id: number;
  description: string;
  status: LeaveStatus;
  startDate: string;
  endDate: string;
  leaveType: LeaveType;
  createdAt: string;
  updatedAt: string;
};
