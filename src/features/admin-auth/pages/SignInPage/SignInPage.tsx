import SignInForm from "../../components/SignInForm";

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="w-96 space-y-4 rounded-lg bg-white py-10 px-8 shadow">
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in
            </h1>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
