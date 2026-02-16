import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="h-dvh grid place-items-center">
      <Image
        src={"/images/fade-stagger-circles.svg"}
        alt={"Loading..."}
        width={120}
        height={120}
        className="rounded"
      />
    </div>
  );
};

export default LoadingPage;
