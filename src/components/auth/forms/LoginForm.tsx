"use client";

import { useForm } from "react-hook-form";
import PasswordField from "./shared/PasswordField";
import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import { useState } from "react";
import EmailField from "@/components/forms/components/EmailField";
import { signIn } from "@/lib/auth-client";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModalById("authModal");

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("callbackUrl") ?? "/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();

  const handleLogin = async (data: LoginFormData) => {
    const { email, password } = data;

    try {
      setIsLoading(true);

      const { error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Login failed");
        console.error("Login failed:", error);
        return;
      }

      reset();
      closeModal();
      router.push(redirectTo);
      toast.success("Login successful");
    } catch (error) {
      toast.error("Unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 bg-light">
      <EmailField register={register} error={errors?.email} />
      <PasswordField register={register} error={errors?.password} />

      <FormSubmitButton isFormSubmitting={isLoading} label="Login" />
    </form>
  );
};

export default LoginForm;
