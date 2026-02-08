import { ReviewType } from "@/types";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { image, name, comment, rating } = review || {};

  return (
    <article className="pt-9 ps-9 pe-px h-full relative">
      <div className="relative h-full p-7 shadow rounded bg-light-light flex flex-col justify-between">
        <p className="text-pretty text-sm sm:text-base">{comment}</p>

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="text-primary flex items-center gap-2">
            {[...Array(rating)].map((_, index) => (
              <BsStarFill key={index} />
            ))}
          </div>
        </div>
      </div>

      <Image
        width={90}
        height={90}
        src={image}
        alt={name}
        className="absolute top-0 left-2 size-17 rounded-full"
      />

      {/* Decorative image */}
      <Image
        width={104}
        height={80}
        src={"/images/reviewCircle.avif"}
        className="absolute w-19 h-18.75 top-0 left-0"
        alt=""
      />

      {/* Decorative quote */}
      <Image
        width={65}
        height={65}
        src={"/images/quote.svg"}
        alt=""
        className="absolute bottom-4 right-6 opacity-20"
      />
    </article>
  );
};

export default ReviewCard;
