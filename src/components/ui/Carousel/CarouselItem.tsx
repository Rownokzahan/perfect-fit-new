interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem = ({ children }: CarouselItemProps) => {
  return <div className="h-full mx-2 sm:mx-3">{children}</div>;
};

export default CarouselItem;
