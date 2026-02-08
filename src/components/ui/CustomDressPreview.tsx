import Image from "next/image";

const sleeveImages: Record<string, string> = {
  Bell: "/images/custom-dress/sleeve/bell.png",
  Bishop: "/images/custom-dress/sleeve/bishop.png",
  Fitted: "/images/custom-dress/sleeve/fitted.png",
  Flutter: "/images/custom-dress/sleeve/flutter.png",
};

const bodiceImages: Record<string, string> = {
  Boat: "/images/custom-dress/bodice/boat.png",
  Scoop: "/images/custom-dress/bodice/scoop.png",
  Square: "/images/custom-dress/bodice/square.png",
  Sweetheart: "/images/custom-dress/bodice/sweetheart.png",
};

const skirtImages: Record<string, string> = {
  Circle: "/images/custom-dress/skirt/circle.png",
  "1/2 Circle": "/images/custom-dress/skirt/halfCircle.png",
  "3/4 Circle": "/images/custom-dress/skirt/threeFourthCircle.png",
  Pleated: "/images/custom-dress/skirt/pleated.png",
};

interface CustomDressPreviewProps {
  bodice: string;
  sleeve: string;
  skirt: string;
}

const CustomDressPreview = ({
  bodice,
  sleeve,
  skirt,
}: CustomDressPreviewProps) => {
  const sleeveImage = sleeveImages[sleeve] || null;
  const bodiceImage = bodiceImages[bodice] || null;
  const skirtImage = skirtImages[skirt] || null;

  return (
    <figure className="relative -mt-[11%]">
      <Image
        width={800}
        height={1109}
        src={"/images/custom-dress/mannequin.png"}
        alt="Mannequin"
      />

      {sleeveImage && (
        <Image
          width={800}
          height={1109}
          src={sleeveImage}
          alt={`${sleeve} Sleeve`}
          className="absolute top-0"
        />
      )}

      {bodiceImage && (
        <Image
          width={800}
          height={1109}
          src={bodiceImage}
          alt={`${bodice} Bodice`}
          className="absolute top-0"
        />
      )}

      {skirtImage && (
        <Image
          width={800}
          height={1109}
          src={skirtImage}
          alt={`${skirt} Skirt`}
          className="absolute top-0"
        />
      )}
    </figure>
  );
};

export default CustomDressPreview;
