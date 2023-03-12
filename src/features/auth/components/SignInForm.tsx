import FormControl from "@/components/FormControl";
import { useForm } from "react-hook-form";

import { SignInParams } from "../types";

type SignInFormProps = {
  onSubmit: (data: SignInParams) => void;
  isLoading: boolean;
};

const SignInForm = (props: SignInFormProps) => {
  const { onSubmit, isLoading } = props;

  const { handleSubmit, register } = useForm<SignInParams>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
      className="form-control mt-6 w-full max-w-xs space-y-2"
    >
      <div>
        <FormControl label="Email" isRequired={true}>
          <input
            {...register("email")}
            type="email"
            placeholder="name@company.com"
            className="input-bordered input input-md w-full max-w-md"
          />
        </FormControl>

        <FormControl label="Password" isRequired={true}>
          <input
            {...register("password")}
            type="password"
            placeholder="••••••••"
            className="input-bordered input input-md w-full max-w-md"
          />
        </FormControl>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="label cursor-pointer space-x-2">
            <input
              type="checkbox"
              className="checkbox-primary checkbox h-4 w-4 rounded-sm border-gray-300"
            />
            <span className="label-text">Remember me</span>
          </label>
          <a className="label-text link" href="/admins/forget-password">
            Forget password?
          </a>
        </div>
        <button
          type="submit"
          className={`btn-primary btn w-full bg-blue-700 ${
            isLoading && "btn-disabled loading"
          }`}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
