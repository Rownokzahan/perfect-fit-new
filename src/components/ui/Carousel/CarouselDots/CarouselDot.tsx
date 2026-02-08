import clsx from "clsx";

interface CarouselDotProps {
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const CarouselDot = ({ isActive, onClick, ariaLabel }: CarouselDotProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="size-5 grid place-items-center"
    >
      <span
        className={clsx(
          "block h-2 w-2 rounded-full",
          isActive ? "w-full bg-primary" : "w-2 bg-primary/20"
        )}
      />
    </button>
  );
};

export default CarouselDot;
