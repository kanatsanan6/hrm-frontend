import { MongoAbility } from "@casl/ability";

import { SUBJECTS } from "./constants";

export type Actions =
  | "create"
  | "read"
  | "update"
  | "delete"
  | "approve"
  | "invite";

export type Subjects = "all" | (typeof SUBJECTS)[number];

export type Abilities = [Actions, Subjects];
export type AppAbility = MongoAbility<Abilities>;
