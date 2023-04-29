export type RawUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  company_id?: number;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  companyId?: number;
  createdAt: string;
  updatedAt: string;
};
