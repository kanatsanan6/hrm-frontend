import { z } from "zod";

export const inviteUserSchema = z.object({
  email: z.string().email("Email is incorrect").min(1, "Required"),
  first_name: z.string().min(1, "Required"),
  last_name: z.string().min(1, "Required"),
});
