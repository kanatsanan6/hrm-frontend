import { Fragment, ReactNode } from "react";

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
    <Fragment>
      {label && (
        <label className="label flex justify-start">
          <span className="label-text">{label}</span>
          {isRequired && <p className="text-red-500">*</p>}
        </label>
      )}
      {children}

      <div
        className={`collapse ${isInvalid ? "collapse-open" : "collapse-close"}`}
      >
        <p className="mt-1 text-right text-sm text-red-600">{errorMsg}</p>
      </div>
    </Fragment>
  );
};

export default FormControl;
