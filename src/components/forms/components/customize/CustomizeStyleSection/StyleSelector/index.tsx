import { FieldError, UseFormRegister } from "react-hook-form";
import type { CustomizeStyle } from "../customizeStyles";
import StyleOptionCard from "./StyleOptionCard";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CustomizationFormData } from "@/types";

interface StyleSelectorProps {
  register: UseFormRegister<CustomizationFormData>;
  error?: FieldError;
  style: CustomizeStyle;
  includeDefaultOption: boolean;
}

const StyleSelector = ({
  style,
  register,
  error,
  includeDefaultOption,
}: StyleSelectorProps) => {
  const { id, title, options } = style || {};

  return (
    <div className="w-full max-w-fit space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>

        {/* Display Error message if there is any */}
        {error && (
          <p className="text-xs text-nowrap text-red-600 flex items-center gap-1">
            <AiOutlineExclamationCircle />
            {error.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        {includeDefaultOption && (
          <StyleOptionCard
            styleId={id}
            styleTitle={title}
            register={register}
            label="As Shown"
            value="Default"
          />
        )}

        {options.map((option, idx) => {
          const { name, image } = option || {};

          return (
            <StyleOptionCard
              key={idx}
              styleId={id}
              styleTitle={title}
              register={register}
              label={name}
              image={image}
              value={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
