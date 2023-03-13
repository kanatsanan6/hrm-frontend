import SignUpForm from "../../components/SignUpForm";
import { useSignUp } from "../../services";

const SignUpPage = () => {
  const { mutate: signUp, isLoading } = useSignUp();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-fit justify-between space-y-4 rounded-lg bg-white shadow">
          <img src={"/images/sign_up_hero.svg"} className="hidden md:block" />
          <div className="w-96 px-8 py-4 md:w-[500px]">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign Up
            </h1>
            <p className="text-gray-500">Sign up to enjoy Team Terk!</p>
            <SignUpForm
              isLoading={isLoading}
              onSubmit={(data) => {
                signUp({ data });
              }}
            />
            <div className="mt-4 flex">
              <p className="text-sm text-gray-500">
                Already have an account?&nbsp;
              </p>
              <a className="label-text link" href="/sign-in">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
