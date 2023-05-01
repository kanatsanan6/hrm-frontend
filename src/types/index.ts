import { AppAbility } from "@/permissions/types";
import { RawRuleOf } from "@casl/ability";

export type Role = "admin" | "member";

export type RawUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  company_id?: number;
  role: Role;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  companyId?: number;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

export type RawPolicy = {
  subject: string;
  action: string;
};

export type RawMe = {
  user: RawUser;
  policy: RawPolicy[];
};

export type Rules = RawRuleOf<AppAbility>[];
export type Me = {
  user: User;
  policy: Rules;
};
