import SignInForm from "../../components/SignInForm";
import { useSignIn } from "../../services";

const SignInPage = () => {
  const { mutate: signIn, isLoading } = useSignIn();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-fit justify-between space-y-4 rounded-lg bg-white shadow">
          <img src={"/images/sign_in_hero.svg"} className="hidden md:block" />
          <div className="w-96 px-8 py-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in
            </h1>
            <p className="text-gray-500">Please sign in to your account.</p>
            <SignInForm
              isLoading={isLoading}
              onSubmit={(data) => {
                signIn({ data });
              }}
            />
            <div className="mt-4 flex">
              <p className="text-sm text-gray-500">
                Don't have an account?&nbsp;
              </p>
              <a className="label-text link" href="/sign-up">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
