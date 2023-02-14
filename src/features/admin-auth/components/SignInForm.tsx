import { useForm } from "react-hook-form";

import { signInServices } from "../services";
import { SignUpParams } from "../types";

const SignInForm = () => {
  const { handleSubmit, register } = useForm<SignUpParams>();

  const handleSignIn = (data: SignUpParams) => {
    signInServices().signIn({
      email: data["email"],
      password: data["password"],
    });
  };
  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="form-control w-full max-w-xs space-y-4"
    >
      <div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="name@company.com"
          className="input-bordered input input-md w-full max-w-md"
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="••••••••"
          className="input-m input-bordered input w-full max-w-md"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="label cursor-pointer space-x-2">
          <input
            type="checkbox"
            className="checkbox-primary checkbox h-4 w-4 rounded-sm border-gray-300"
          />
          <span className="label-text">Remember me</span>
        </label>
        <a className="label-text link" href="#">
          Forget password?
        </a>
      </div>
      <button className="btn-primary btn w-full bg-blue-700">Sign In</button>
    </form>
  );
};

export default SignInForm;
