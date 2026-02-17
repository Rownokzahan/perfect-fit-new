"use client";

import CustomizeStyleSection from "@/components/forms/components/customize/CustomizeStyleSection";
import MeasurementInputsSection from "@/components/forms/components/customize/MeasurementInputsSection";
import SpecialRequest from "@/components/forms/components/customize/SpecialRequest";
import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import useCart from "@/hooks/useCart";
import useModalById from "@/hooks/useModalById";
import { CustomizationFormData } from "@/types";
import { Product } from "@/types/product";
import { useForm } from "react-hook-form";

interface DressCustomizationProps {
  dress: Product;
}

const DressCustomization = ({ dress }: DressCustomizationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomizationFormData>();

  const { addToCart } = useCart();
  const { openModal } = useModalById("addToCartModal");

  const handleAddToCart = (data: CustomizationFormData) => {
    const cartItem = {
      customizations: {
        bodiceType: data.bodiceType,
        sleeveType: data.sleeveType,
        skirtType: data.skirtType,
        fabric: data.fabric,
      },
      measurements: {
        length: data.length,
        sleeveLength: data.sleeveLength,
        chest: data.chest,
        waist: data.waist,
      },
      product: {
        _id: dress._id,
        name: dress.name,
        price: dress.price,
        image: dress.image,
      },
      isCustomDress: false,
      quantity: 1,
      totalPrice: dress.price,
      request: data.request,
    };

    addToCart(cartItem);
    reset();
    openModal();
  };

  return (
    <div className="space-y-4">
      <h3 className="pb-2 border-b text-xl font-medium text-dark-light">
        Change Dress Style
      </h3>

      <form
        onSubmit={handleSubmit(handleAddToCart)}
        className="bg-light space-y-6"
      >
        <CustomizeStyleSection
          register={register}
          errors={errors}
          includeDefaultOptions={true}
        />
        <MeasurementInputsSection register={register} errors={errors} />
        <SpecialRequest register={register} error={errors?.request} />

        <FormSubmitButton label="Add to Cart" isFormSubmitting={false} />
      </form>
    </div>
  );
};

export default DressCustomization;
