"use client";

import { useForm, UseFormReset } from "react-hook-form";
import ImageField from "../components/ImageField";
import FormSubmitButton from "../components/FormSubmitButton";
import InputField from "../components/InputField";

export interface CategoryFormData {
  name: string;
  image: FileList | string;
}

interface CategoryFormProps {
  label: string;
  defaultValues?: Partial<CategoryFormData>;
  onSubmit: (
    data: CategoryFormData,
    reset: UseFormReset<CategoryFormData>
  ) => void;
  isFormSubmitting: boolean;
}

const CategoryForm = ({
  label,
  isFormSubmitting,
  defaultValues,
  onSubmit,
}: CategoryFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormData>({ defaultValues });

  return (
    <>
      <h3 className="text-2xl text-center font-semibold">{label}</h3>

      <form
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
        className="max-w-xl mt-8 p-8 rounded mx-auto bg-white space-y-6"
      >
        <InputField
          id="name"
          label="Category Name"
          type="text"
          registerProps={register("name", {
            required: "Category Name is required",
          })}
          error={errors?.name}
        />

        <ImageField
          register={register}
          error={errors.image}
          watchImage={watch("image")}
          defaultImageUrl={
            typeof defaultValues?.image === "string"
              ? defaultValues.image
              : undefined
          }
        />

        <FormSubmitButton isFormSubmitting={isFormSubmitting} label={label} />
      </form>
    </>
  );
};

export default CategoryForm;
