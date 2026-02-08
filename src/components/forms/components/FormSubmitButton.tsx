import Button from "@/components/ui/Button";
import { ImSpinner9 } from "react-icons/im";

interface FormSubmitButtonProps {
  label: string;
  isFormSubmitting: boolean;
}

const FormSubmitButton = ({
  label,
  isFormSubmitting,
}: FormSubmitButtonProps) => {
  if (isFormSubmitting) {
    return (
      <Button type="button" className="w-full py-3">
        <ImSpinner9 className="animate-spin" />
      </Button>
    );
  }

  return (
    <Button type="submit" className="w-full py-3">
      {label}
    </Button>
  );
};

export default FormSubmitButton;
