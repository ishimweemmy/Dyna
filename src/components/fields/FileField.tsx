import { forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type TInputField = {
  variant: string;
  disabled?: boolean;
  name: string;
  value?: string;
  error?: FieldError | any;
  extra: string;
  register: UseFormRegister<any>;
};

const FileField = forwardRef<HTMLInputElement, TInputField>(
  ({ name, register, error, extra }, ref) => {
    const fileInput = register(name);

    return (
      <div className={`w-full flex flex-col items-start justify-center ${extra}`}>
        <input
          {...fileInput}
          ref={ref}
          type="file"
        />
        {error ? (
          <span className="text-xs text-red-500">{error.message}</span>
        ) : (
          <span className="text-xs text-white">no error</span>
        )}
      </div>
    );
  },
);

FileField.displayName = "FileField";

export default FileField;
