"use client";

import InputField from "@/components/forms/components/InputField";
import FormSubmitButton from "@/components/forms/components/FormSubmitButton";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-inherit">
      <InputField
        id="name"
        label="Full Name"
        type="text"
        registerProps={register("name", {
          required: "Full Name is required",
        })}
        error={errors?.name}
      />

      <InputField
        id="email"
        label="Email Address"
        type="email"
        registerProps={register("email", {
          required: "Email Address is required",
        })}
        error={errors?.email}
      />

      <InputField
        id="subject"
        label="Subject"
        type="text"
        registerProps={register("subject", {
          required: "Subject is required",
        })}
        error={errors?.subject}
      />

      <InputField
        id="message"
        type="text"
        label="Message"
        registerProps={register("message", {
          required: "Message is required",
        })}
        isTextArea={true}
        error={errors?.message}
      />

      <FormSubmitButton label="Send Message" isFormSubmitting={false} />
    </form>
  );
};

export default ContactForm;
