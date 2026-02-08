import InputField from "@/components/forms/components/InputField";
import { CustomizationFormData } from "@/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface MeasurementInputsSectionProps {
  register: UseFormRegister<CustomizationFormData>;
  errors?: FieldErrors<CustomizationFormData>;
}

const MeasurementInputsSection = ({
  register,
  errors,
}: MeasurementInputsSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="font-medium">Measurements</h3>
        <p className="text-sm text-dark-light">
          Measurements must be provided in inches
        </p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 text-sm bg-light">
        <InputField
          id="length"
          label="Length"
          type="number"
          registerProps={register("length", {
            required: "Length is required",
            min: { value: 0, message: "Please enter a non-negative number" },
          })}
          error={errors?.length}
        />

        <InputField
          id="sleeveLength"
          label="Sleeve length"
          type="number"
          registerProps={register("sleeveLength", {
            required: "Sleeve length is required",
            min: { value: 0, message: "Please enter a non-negative number" },
          })}
          error={errors?.sleeveLength}
        />

        <InputField
          id="chest"
          label="Chest"
          type="number"
          registerProps={register("chest", {
            required: "Chest length is required",
            min: { value: 0, message: "Please enter a non-negative number" },
          })}
          error={errors?.chest}
        />

        <InputField
          id="waist"
          label="Waist"
          type="number"
          registerProps={register("waist", {
            required: "Waist length is required",
            min: { value: 0, message: "Please enter a non-negative number" },
          })}
          error={errors?.waist}
        />
      </div>
    </div>
  );
};

export default MeasurementInputsSection;
