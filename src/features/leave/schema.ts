import { z } from "zod";

export const createLeaveSchema = z.object({
  leave_type: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
  start_date: z.string().min(1, "Required"),
  end_date: z.string().min(1, "Required"),
});
