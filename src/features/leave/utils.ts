import { Leave, LeaveType, RawLeave, RawLeaveType } from "./types";

const transformLeaveType = (raw: RawLeaveType): LeaveType => {
  return {
    ...raw,
    createdAt: raw.created_at,
    updatedAt: raw.updated_at,
  };
};

export const transformLeave = (raw: RawLeave): Leave => {
  return {
    ...raw,
    startDate: raw.start_date,
    endDate: raw.end_date,
    leaveType: transformLeaveType(raw.leave_type),
    createdAt: raw.created_at,
    updatedAt: raw.updated_at,
  };
};
