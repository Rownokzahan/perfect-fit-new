import { CustomizationFormData } from "@/types";
import { FieldError, UseFormRegister } from "react-hook-form";
import InputField from "../InputField";

interface SpecialRequestProps {
  register: UseFormRegister<CustomizationFormData>;
  error?: FieldError;
}

const SpecialRequest = ({ register, error }: SpecialRequestProps) => {
  return (
    <div className="space-y-4 bg-light">
      <h3 className="font-medium">Any Special Request/Info</h3>

      <InputField
        id="request"
        label="Request"
        type="number"
        registerProps={{ ...register("request") }}
        isTextArea={true}
        error={error}
      />
    </div>
  );
};

export default SpecialRequest;
