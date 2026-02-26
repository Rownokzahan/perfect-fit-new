import { floatingInputClass, floatingLabelClass } from "@/styles/formStyles";
import clsx from "clsx";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiEye, PiEyeClosed } from "react-icons/pi";

interface InputFieldProps {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "tel";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerProps: any;
  error?: FieldError;
  isTextArea?: boolean;
}

const InputField = ({
  id,
  label,
  type,
  registerProps,
  error,
  isTextArea = false,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isPasswordField = type === "password";
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="relative bg-inherit">
      {isTextArea ? (
        <textarea
          id={id}
          name={id}
          placeholder={label}
          autoComplete="off"
          {...registerProps}
          className={clsx(
            floatingInputClass,
            "min-h-12.5",
            error && "border-red-600",
          )}
          rows={4}
        />
      ) : (
        <input
          type={inputType}
          id={id}
          autoComplete="off"
          placeholder={label}
          {...(type === "number" && { min: "0" })}
          {...registerProps}
          className={clsx(
            floatingInputClass,
            isPasswordField && "pe-8",
            error && "border-red-600",
          )}
        />
      )}

      {error && (
        <p className="ps-px mt-1 text-red-600 text-xs flex items-start gap-1">
          <AiOutlineExclamationCircle className="shrink-0 mt-0.5" />
          {error.message}
        </p>
      )}

      {isPasswordField && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-1/2 -translate-y-1/2 right-3 text-dark/70"
        >
          {showPassword ? <PiEye /> : <PiEyeClosed />}
        </button>
      )}

      <label htmlFor={id} className={floatingLabelClass}>
        {label}
      </label>
    </div>
  );
};

export default InputField;
