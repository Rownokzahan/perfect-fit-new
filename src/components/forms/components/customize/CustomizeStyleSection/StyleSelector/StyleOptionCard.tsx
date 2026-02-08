import Image from "next/image";
import { PiCheckCircleFill } from "react-icons/pi";
import type { CustomizeStyleId } from "../customizeStyles";
import { UseFormRegister } from "react-hook-form";
import { CustomizationFormData } from "@/types";

interface StyleOptionCardProps {
  image?: string; // If image is missing than it is a default option
  value: string;
  styleId: CustomizeStyleId;
  styleTitle: string;
  register: UseFormRegister<CustomizationFormData>;
  label: string;
}

const StyleOptionCard = ({
  image,
  value,
  styleId,
  styleTitle,
  register,
  label,
}: StyleOptionCardProps) => {
  const isDefaultOption = !image; // If image is not provided, it is considered a default option

  return (
    <label className="space-y-1">
      <div className="block size-16 sm:size-20 p-2 border has-checked:border-primary rounded-lg relative z-0 duration-75">
        {isDefaultOption ? (
          <div className="size-full flex justify-center items-center">
            <p className="text-dark-light text-xs text-center">Default</p>
          </div>
        ) : (
          <Image
            width={600}
            height={600}
            src={image}
            alt={label}
            className="size-full"
          />
        )}

        <input
          type="radio"
          {...register(styleId, {
            required: `Please Select a ${styleTitle}`,
          })}
          value={value}
          defaultChecked={isDefaultOption}
          className="hidden peer"
        />

        {/* Check mark icon */}
        <div className="text-primary opacity-0 peer-checked:opacity-100 duration-75">
          <PiCheckCircleFill className="absolute z-1 top-0 left-1/2 -translate-1/2 text-lg" />
          <span className="size-2 bg-light absolute top-0 left-1/2 -translate-1/2" />
        </div>
      </div>

      <p className="text-dark-light text-xs text-center">{label}</p>
    </label>
  );
};

export default StyleOptionCard;
