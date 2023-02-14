type ToastParams = {
  message: string;
};

const Toast = ({ message }: ToastParams) => {
  return (
    <div className="alert alert-success">
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
