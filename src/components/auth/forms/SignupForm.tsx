"use client";

import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import PasswordField from "./shared/PasswordField";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/components/InputField";
import { useRouter, useSearchParams } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import EmailField from "@/components/forms/components/EmailField";
import toast from "react-hot-toast";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";

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

  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("callbackUrl") ?? "/";
  const router = useRouter();

  const { closeModal } = useModalById("authModal");

  const handleSignup = async (data: SignupFormData) => {
    const { name, email, password } = data;

    try {
      setIsLoading(true);

      const { error } = await signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Signup failed");
        console.error("Signup failed:", error);
        return;
      }

      reset();
      closeModal();
      router.push(redirectTo);
      toast.success("Signup successful");
    } catch (err) {
      toast.error("Unexpected error occurred");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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

      <FormSubmitButton isFormSubmitting={isLoading} label="Sign up" />
    </form>
  );
};

export default SignupForm;
