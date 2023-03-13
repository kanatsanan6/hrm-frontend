import FormControl from "@/components/forms/FormControl";
import PasswordForm from "@/components/forms/PasswordForm";
import PasswordValidatorForm from "@/components/forms/PasswordValidatorForm";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpParams } from "../types";
import { signUpFormSchema } from "../schema";

type SignUpFormProps = {
  onSubmit: (data: SignUpParams) => void;
  isLoading: boolean;
};

const SignUpForm = (props: SignUpFormProps) => {
  const { onSubmit, isLoading } = props;

  const [password, setPassword] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpParams>({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
      className="form-control mt-2 w-full max-w-md space-y-2"
    >
      <div>
        <div className="flex flex-col justify-between md:flex-row md:space-x-4">
          <FormControl
            label="Firstname"
            isRequired={true}
            errorMsg={errors.first_name?.message}
          >
            <input
              {...register("first_name")}
              type="text"
              placeholder="John"
              className="input-bordered input input-md w-full max-w-md"
            />
          </FormControl>

          <FormControl
            label="Lastname"
            isRequired={true}
            errorMsg={errors.last_name?.message}
          >
            <input
              {...register("last_name")}
              type="text"
              placeholder="Doe"
              className="input-bordered input input-md w-full max-w-md"
            />
          </FormControl>
        </div>

        <FormControl
          label="Company"
          isRequired={true}
          errorMsg={errors.company_name?.message}
        >
          <input
            {...register("company_name")}
            type="text"
            placeholder="Example Company"
            className="input-bordered input input-md w-full max-w-md"
          />
        </FormControl>

        <FormControl
          label="Email"
          isRequired={true}
          errorMsg={errors.email?.message}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="name@company.com"
            className="input-bordered input input-md w-full max-w-md"
          />
        </FormControl>

        <FormControl
          label="Password"
          isRequired={true}
          errorMsg={errors.password?.message}
        >
          <PasswordValidatorForm value={password}>
            <PasswordForm
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </PasswordValidatorForm>
        </FormControl>
        <FormControl
          label="Password confirmation"
          isRequired={true}
          errorMsg={errors.password_confirmation?.message}
        >
          <PasswordForm
            {...register("password_confirmation")}
            placeholder="••••••••"
          />
        </FormControl>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className={`btn-primary btn w-full bg-blue-700 ${
            isLoading && "btn-disabled loading"
          }`}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
