const ForgetPasswordForm = () => {
  return (
    <form className="form-control mt-6 w-full max-w-xs space-y-4">
      <div>
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          className="input-bordered input input-md w-full max-w-md"
        />
      </div>
      <button type="submit" className="btn-primary btn w-full bg-blue-700">
        Request Reset Password
      </button>
      <p className="label-text text-gray-700">
        Back to&nbsp;
        <a className="link" href="/admins/sign-in">
          Sign in?
        </a>
      </p>
    </form>
  );
};

export default ForgetPasswordForm;
