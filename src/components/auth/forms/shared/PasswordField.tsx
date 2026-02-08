import InputField from "@/components/forms/components/InputField";
import { FieldError, UseFormRegister } from "react-hook-form";

interface PasswordFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
}

const PasswordField = ({ register, error }: PasswordFieldProps) => {
  return (
    <InputField
      id="password"
      type="password"
      label="Password"
      registerProps={{
        ...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password should be at least 6 character",
          },
        }),
      }}
      error={error}
    />
  );
};

export default PasswordField;
