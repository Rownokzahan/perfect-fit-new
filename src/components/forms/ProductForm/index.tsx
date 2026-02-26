"use client";

import { useForm, UseFormReset, useWatch } from "react-hook-form";
import ImageField from "../components/ImageField";
import ProductCategorySelect from "./ProductCategorySelect";
import InputField from "@/components/forms/components/InputField";
import FormSubmitButton from "../components/FormSubmitButton";
import { Category } from "@/types/category";

export interface ProductFormData {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  image: FileList | string;
}

interface ProductFormProps {
  categories: Category[];
  label: string;
  defaultValues?: Partial<ProductFormData>;
  onSubmit: (
    data: ProductFormData,
    reset: UseFormReset<ProductFormData>,
  ) => void;
  isFormSubmitting: boolean;
}

const ProductForm = ({
  categories,
  label,
  isFormSubmitting,
  defaultValues,
  onSubmit,
}: ProductFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({ defaultValues });

  const imageValue = useWatch({
    control,
    name: "image",
  });

  return (
    <>
      <h3 className="text-2xl text-center font-semibold">{label}</h3>

      <form
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
        className="max-w-xl mt-8 p-8 rounded mx-auto bg-white space-y-6"
      >
        <InputField
          id="name"
          label="Product Name"
          type="text"
          registerProps={register("name", {
            required: "Product Name is required",
          })}
          error={errors?.name}
        />

        <InputField
          id="description"
          type="text"
          label="Description"
          registerProps={register("description")}
          isTextArea={true}
          error={errors?.description}
        />

        <InputField
          id="price"
          label="Price"
          type="number"
          registerProps={register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price must be positive" },
          })}
          error={errors.price}
        />

        <InputField
          id="stock"
          label="Stock"
          type="number"
          registerProps={register("stock", {
            required: "Stock is required",
            min: { value: 0, message: "Stock must be positive" },
          })}
          error={errors.stock}
        />

        <ProductCategorySelect
          control={control}
          error={errors.category}
          categories={categories}
        />

        <ImageField
          register={register}
          error={errors.image}
          watchImage={imageValue}
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

export default ProductForm;
