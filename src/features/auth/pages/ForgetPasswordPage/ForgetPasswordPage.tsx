import ForgetPasswordForm from "../../components/ForgetPasswordForm";

const ForgetPasswordPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-96 flex-col justify-between space-y-4 rounded-lg bg-white px-8 py-8 shadow">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Forget a password?
          </h1>
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
