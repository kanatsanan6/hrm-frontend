export type SignInParams = {
  email: string;
  password: string;
  remember: boolean;
};

export type SignUpParams = {
  email: string;
  password: string;
  password_confirmation: string;
  company_name: string;
  first_name: string;
  last_name: string;
};

export type ForgetPasswordParams = {
  email: string;
};

export type ResetPasswordPayload = {
  password: string;
  password_confirmation: string;
};
