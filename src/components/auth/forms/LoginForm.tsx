"use client";

import { useForm } from "react-hook-form";
import PasswordField from "./shared/PasswordField";
import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useModalById from "@/hooks/useModalById";
import { useTransition } from "react";
import EmailField from "@/components/forms/components/EmailField";
import { signIn } from "@/lib/auth-client";
import { mergeGuestWishlist } from "@/actions/wishlist/mutations/mergeGuestWishlist";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
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

  const handleLogin = (data: LoginFormData) => {
    startTransition(async () => {
      try {
        const { email, password } = data;

        const { error: signInError } = await signIn.email({ email, password });

        if (signInError) {
          toast.error(signInError.message || "Login failed");
          console.error("Login failed:", signInError);
          return;
        }

        const wishlistError = await mergeGuestWishlist();
        if (wishlistError) {
          console.warn("Wishlist merge error:", wishlistError.message);
        }

        reset();
        closeModal();
        router.push(redirectTo);

        toast.success("Login successful");
      } catch (error) {
        toast.error("Unexpected error occurred");
        console.error(error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 bg-light">
      <EmailField register={register} error={errors?.email} />
      <PasswordField register={register} error={errors?.password} />

      <FormSubmitButton isFormSubmitting={isPending} label="Login" />
    </form>
  );
};

export default LoginForm;
