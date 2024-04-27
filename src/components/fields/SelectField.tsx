/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const SelectField: FC<TSelectField> = ({
  name,
  error,
  extra,
  inputStyles,
  options,
  isMulti,
  control,
  label,
  id,
  disabled,
}) => {
  console.log(options);
  return (
    <div className={`w-full ${extra}`}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            `text-sm text-navy-700 dark:text-white`,
            error && "text-red-500",
          )}
        >
          {label}
        </label>
      )}

      <Controller
        control={control}
        defaultValue={options.map((c) => c.value)}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className={cn("py-2", inputStyles)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: ".35rem 0",
                borderRadius: ".75rem",
                border: "2px solid #cbd5e0",
                ":hover": {
                  border: "2px solid #cbd5e0 !important",
                  boxShadow: "none",
                },
                ":focus": {
                  border: "2px solid #cbd5e0 !important",
                  boxShadow: "none",
                },
                ":focus-within": {
                  border: "2px solid #cbd5e0 !important",
                  boxShadow: "none",
                },
                ":focus-visible": {
                  border: "2px solid #cbd5e0 !important",
                  boxShadow: "none",
                },
              }),
              option: (styles, { isSelected, isFocused }) => {
                return {
                  ...styles,
                  backgroundColor: isSelected || isFocused ? "pink" : "",
                };
              },
            }}
            ref={ref}
            value={
              isMulti
                ? options.filter((c) => value.includes(c.value))
                : options.find((c) => c.value === value)
            }
            onChange={(val) =>
              isMulti
                ? onChange(val.map((c: any) => c.value))
                : onChange(val.value)
            }
            options={options}
            isMulti={isMulti}
            id={id}
            isDisabled={disabled}
          />
        )}
      />

      {error ? (
        <span className="text-xs text-red-500">{error.message}</span>
      ) : (
        <span className="text-xs text-white">no error</span>
      )}
    </div>
  );
};

export default SelectField;
