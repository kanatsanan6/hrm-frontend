import validator from "password-validator";
import { z } from "zod";

const schema = new validator();

export const passwordSchema = schema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .symbols(1)
  .has()
  .digits(1);

export const passwordValidator = (password: string) => {
  return passwordSchema.validate(password);
};

export const signUpFormSchema = z
  .object({
    first_name: z.string().min(1, "Required"),
    last_name: z.string().min(1, "Required"),
    email: z.string().email("Email is incorrect").min(1, "Required"),
    company_name: z.string().min(1, "Required"),
    password: z
      .string()
      .min(1, "Required")
      .refine(passwordValidator, "Password is not strong"),
    password_confirmation: z.string().min(1, "Required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password is not matched",
    path: ["password_confirmation"],
  });

export const forgetPasswordSchema = z.object({
  email: z.string().email("Email is incorrect").min(1, "Required"),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Required")
      .refine(passwordValidator, "Password is not strong"),
    password_confirmation: z.string().min(1, "Required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password is not matched",
    path: ["password_confirmation"],
  });
