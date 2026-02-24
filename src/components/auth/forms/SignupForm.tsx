"use client";

import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import PasswordField from "./shared/PasswordField";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/components/InputField";
import { useRouter, useSearchParams } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import EmailField from "@/components/forms/components/EmailField";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { signUp } from "@/lib/auth-client";
import { mergeGuestWishlist } from "@/actions/wishlist/mutations/mergeGuestWishlist";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>();

  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("callbackUrl") ?? "/";
  const router = useRouter();

  const { closeModal } = useModalById("authModal");

  const handleSignup = (data: SignupFormData) => {
    startTransition(async () => {
      try {
        const { name, email, password } = data;

        const { error: signUpError } = await signUp.email({
          name,
          email,
          password,
        });

        if (signUpError) {
          toast.error(signUpError.message || "Signup failed");
          console.error("Signup failed:", signUpError);
          return;
        }

        const wishlistError = await mergeGuestWishlist();
        if (wishlistError) {
          console.warn("Wishlist merge error:", wishlistError.message);
        }

        reset();
        closeModal();
        router.push(redirectTo);

        toast.success("Signup successful");
      } catch (err) {
        toast.error("Unexpected error occurred");
        console.error(err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)} className="space-y-6 bg-light">
      <InputField
        id="name"
        label="Name"
        type="text"
        registerProps={register("name", {
          required: "Name is required",
        })}
        error={errors?.name}
      />
      <EmailField register={register} error={errors?.email} />
      <PasswordField register={register} error={errors?.password} />

      <FormSubmitButton isFormSubmitting={isPending} label="Sign up" />
    </form>
  );
};

export default SignupForm;
