import Carousel from "@/components/ui/Carousel";
import CarouselItem from "@/components/ui/Carousel/CarouselItem";
import ReviewCard from "./ReviewCard";
import { ReviewType } from "@/types";

const reviews: ReviewType[] = [
  {
    _id: "1",
    name: "Emily Johnson",
    rating: 5,
    comment:
      "Absolutely adore the dress! The customization options were exactly what I needed, and the quality is beyond impressive and the fit was perfect. I'm already planning my next purchase.",
    image: "/images/home/review/customer1.jpg",
  },
  {
    _id: "2",
    name: "Sophia Smith",
    rating: 4,
    comment:
      "Received my dream dress! Quick delivery and top-notch quality exceeded my expectations. More customization options would be icing on the cake, but overall, I'm thrilled.",
    image: "/images/home/review/customer2.jpg",
  },
  {
    _id: "3",
    name: "Isabella Brown",
    rating: 5,
    comment:
      "Exceptional customer service! Their assistance with sizing was invaluable, and the dress fits like a glove. Couldn't be happier with my purchase!",
    image: "/images/home/review/customer3.jpg",
  },
  {
    _id: "4",
    name: "Olivia Davis",
    rating: 5,
    comment:
      "Absolutely impressed! The dress's quality exceeded my expectations, and the level of customization available made it truly unique. Found exactly what I was looking for.",
    image: "/images/home/review/customer4.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="ui-container my-16">
      <h3 className="mb-6 font-semibold text-2xl sm:text-3xl text-center sm:text-left">
        Customers <span className="text-primary">Review</span>
      </h3>

      <Carousel showArrows={false}>
        {reviews.map((review) => (
          <div key={review._id} className="shrink-0 w-full md:w-1/2 xl:w-1/3">
            <CarouselItem>
              <ReviewCard review={review} />
            </CarouselItem>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Reviews;
