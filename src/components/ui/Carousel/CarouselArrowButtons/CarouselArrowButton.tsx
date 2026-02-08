import clsx from "clsx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarouselArrowButtonProps {
  isDisabled: boolean;
  onClick: () => void;
  position: "next" | "prev";
}

const CarouselArrowButton = ({
  isDisabled,
  onClick,
  position,
}: CarouselArrowButtonProps) => {
  if (isDisabled) {
    return null;
  }

  const Icon = position === "prev" ? IoChevronBack : IoChevronForward;

  return (
    <button
      className={clsx(
        "size-9 rounded-full shadow-sm",
        "bg-primary text-light grid place-items-center",
        "absolute z-10 top-1/2 -translate-y-1/2",
        {
          "-left-2 sm:-left-3": position === "prev",
          "-right-2 sm:-right-3 ": position === "next",
        }
      )}
      aria-label={position === "prev" ? "Previous slide" : "Next slide"}
      onClick={onClick}
    >
      <Icon className="text-xl" />
    </button>
  );
};

export default CarouselArrowButton;
