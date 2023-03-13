export type SignInParams = {
  email: string;
  password: string;
  remember: boolean;
};

export type SignUpParams = {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  company_name: string;
};
