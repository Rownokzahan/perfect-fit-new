import clsx from "clsx";

const CarouselDotsSkeleton = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {[...Array(4)].map((_, index) => (
        <button key={index} className="size-5 grid place-items-center">
          <span
            className={clsx(
              "block h-2 w-2 rounded-full",
              index === 0 ? "w-full bg-gray-300" : "w-2 bg-gray-200"
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default CarouselDotsSkeleton;
