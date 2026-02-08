import Carousel from "@/components/ui/Carousel";
import ExpertCard from "./ExpertCard";
import CarouselItem from "@/components/ui/Carousel/CarouselItem";

const experts = [
  {
    id: "1",
    name: "Charlotte Taylor",
    image: "/images/home/team/tailor4.webp",
    designation: "Designer",
  },

  {
    id: "2",
    name: "Emma Wilson",
    image: "/images/home/team/tailor2.webp",
    designation: "Master",
  },

  {
    id: "3",
    name: "Olivia Davis",
    image: "/images/home/team/tailor3.webp",
    designation: "Tailor",
  },

  {
    id: "4",
    name: "Jhon Smith",
    image: "/images/home/team/tailor1.webp",
    designation: "Tailor",
  },
];

const OurExpertsCarousel = () => {
  return (
    <Carousel>
      {experts?.map((expert) => (
        <div
          key={expert.id}
          className="shrink-0 w-[80%] sm:w-1/2 md:w-1/3"
        >
          <CarouselItem>
            <ExpertCard expert={expert} />
          </CarouselItem>
        </div>
      ))}
    </Carousel>
  );
};

export default OurExpertsCarousel;
