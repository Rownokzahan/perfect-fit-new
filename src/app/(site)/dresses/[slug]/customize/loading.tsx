import Image from "next/image";

const ProductPageLoading = () => {
  return (
    <div className="h-[calc(100dvh-64px)] lg:h-[calc(100dvh-72px)] grid place-items-center">
      <Image
        src={"/images/fade-stagger-circles.svg"}
        alt={"Loading..."}
        width={120}
        height={120}
        className="rounded"
        priority
      />
    </div>
  );
};

export default ProductPageLoading;