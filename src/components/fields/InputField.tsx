import { FC } from "react";

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  extra: string;
  placeholder: string;
  variant: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  name?: string;
  value?: string
  onChange? : (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField : FC<CustomInputProps>  = (props) =>{
  const { label, id, extra, type, placeholder, variant, state, disabled, name, value, onChange } =
  props;
  return (
    <div className={`w-full ${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl ring-2 bg-white/0 p-3 text-sm outline-none ${
          disabled === true
            ? "!ring-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "ring-red-500 text-red-500 placeholder:text-red-500 dark:!ring-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "ring-green-500 text-green-500 placeholder:text-green-500 dark:!ring-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "ring-gray-200 dark:!ring-white/10 dark:text-white"
        }`}
        value={value}
      />
    </div>
  );
}



export default InputField;
