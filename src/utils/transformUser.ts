import { RawUser, User } from "@/types";

export const transformUser = (user: RawUser): User => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    createdAt: user.created_at,
    role: user.role,
    updatedAt: user.updated_at,
  };
};
