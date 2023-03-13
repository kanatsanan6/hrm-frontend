import { ReactNode, useState } from "react";
import { IconContext } from "react-icons";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

type Props = {
  children: ReactNode;
  value: string;
};

const PasswordValidatorForm = (props: Props) => {
  const { children, value } = props;
  const [show, setShow] = useState(false);

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialRegex = /[^a-zA-Z0-9]/;

  const isAtLeast8Char = value.length >= 8;
  const isContainLowerCase = lowercaseRegex.test(value);
  const isContainUpperCase = uppercaseRegex.test(value);
  const isContainNumber = numberRegex.test(value);
  const isContainSpecial = specialRegex.test(value);

  return (
    <div
      className="z-50"
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="mb-[-175px] mt-2 flex justify-end">
          <div className="border-black-800 w-84 flex h-[167px] flex-col justify-center rounded-md border bg-white p-2">
            <PasswordHint
              text="At least 8 characters"
              passed={isAtLeast8Char}
            />
            <PasswordHint
              text="Must contain at least 1 lowercase (a-z)"
              passed={isContainLowerCase}
            />
            <PasswordHint
              text="Must contain at least 1 uppercase (A-Z)"
              passed={isContainUpperCase}
            />
            <PasswordHint
              text="Must contain at least 1 number (0-9)"
              passed={isContainNumber}
            />
            <PasswordHint
              text="Must contain at least 1 special character"
              passed={isContainSpecial}
            />
          </div>
        </div>
      )}
    </div>
  );
};

type PasswordHintProps = {
  text: string;
  passed: boolean;
};

const PasswordHint = (passwordHintProps: PasswordHintProps) => {
  const { text, passed } = passwordHintProps;

  return (
    <div className="flex items-center space-x-2 p-1">
      {passed ? (
        <IconContext.Provider value={{ color: "#00C4A8" }}>
          <BsCheckCircleFill />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ color: "#C4C4C4" }}>
          <BsCircle />
        </IconContext.Provider>
      )}
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default PasswordValidatorForm;
