import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const PasswordForm = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [show, setShow] = useState(false);

  return (
    <div className="input-bordered input input-md flex w-full max-w-md flex-row items-center justify-between">
      <input
        className="w-full !outline-none"
        type={show ? "text" : "password"}
        {...props}
        ref={ref}
      />
      <div onClick={() => setShow((prevShow) => !prevShow)}>
        {show ? <FiEyeOff /> : <FiEye />}
      </div>
    </div>
  );
});

export default PasswordForm;
