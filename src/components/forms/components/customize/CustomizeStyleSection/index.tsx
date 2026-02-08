import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CustomizeStyles } from "./customizeStyles";
import StyleSelector from "./StyleSelector";
import { CustomizationFormData } from "@/types";

interface CustomizeStyleSectionProps {
  register: UseFormRegister<CustomizationFormData>;
  errors?: FieldErrors<CustomizationFormData>;
  includeDefaultOptions: boolean;
}

const CustomizeStyleSection = ({
  register,
  errors,
  includeDefaultOptions,
}: CustomizeStyleSectionProps) => {
  return (
    <div className="space-y-6">
      {CustomizeStyles.map((style, idx) => (
        <StyleSelector
          key={idx}
          style={style}
          register={register}
          error={errors ? errors[style.id] : undefined}
          includeDefaultOption={includeDefaultOptions}
        />
      ))}
    </div>
  );
};

export default CustomizeStyleSection;
