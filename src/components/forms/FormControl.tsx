import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  errorMsg?: string;
  label?: string;
  isRequired?: boolean;
};

const FormControl = (props: Props) => {
  const { children, errorMsg, label, isRequired } = props;

  const isInvalid = Boolean(errorMsg);

  return (
    <div className="flex w-full flex-col">
      {label && (
        <div className="flex items-center justify-between">
          <label className="label flex justify-start">
            <span className="label-text">{label}</span>
            {isRequired && <p className="text-red-500">*</p>}
          </label>
          <div
            className={`collapse ${
              isInvalid ? "collapse-open" : "collapse-close"
            }`}
          >
            <p className="mt-1 text-right text-xs text-red-600">{errorMsg}</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default FormControl;
