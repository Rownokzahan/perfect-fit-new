import Image from "next/image";
import CustomDressPreview from "./CustomDressPreview";

interface CustomizedProductPreviewProps {
  isCustomDress: boolean;
  productImage?: string;
  bodice?: string;
  sleeve?: string;
  skirt?: string;
}

const CustomizedProductPreview = ({
  isCustomDress,
  productImage,
  bodice,
  sleeve,
  skirt,
}: CustomizedProductPreviewProps) => {
  if (isCustomDress) {
    return (
      <div className="size-full">
        <CustomDressPreview
          bodice={bodice || ""}
          sleeve={sleeve || ""}
          skirt={skirt || ""}
        />
      </div>
    );
  }

  return (
    <figure className="size-full">
      <Image
        src={productImage || "/placeholder.jpg"}
        alt="Product Image"
        width={400}
        height={700}
        className="size-full rounded object-cover object-top bg-gray-200"
        unoptimized
      />
    </figure>
  );
};

export default CustomizedProductPreview;
