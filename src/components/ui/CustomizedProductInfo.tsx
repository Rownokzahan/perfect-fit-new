import { CustomizedProduct } from "@/types/product";

interface CustomizedProductInfoProps {
  customizedProduct: CustomizedProduct;
}

const CustomizedProductInfo = ({
  customizedProduct,
}: CustomizedProductInfoProps) => {
  const {
    customizations,
    measurements,
    request,
    isCustomDress,
    customDress,
    product,
  } = customizedProduct;

  const name = isCustomDress ? customDress?.name : product?.name;
  const { bodiceType, sleeveType, skirtType, fabric } = customizations || {};
  const { length, sleeveLength, chest, waist } = measurements || {};

  return (
    <div className="min-w-0 space-y-2">
      <h3 className="font-semibold truncate">{name}</h3>

      <div className="ps-1 space-y-1 text-xs text-dark-light">
        <p>Bodice: {bodiceType}</p>
        <p>Sleeve: {sleeveType}</p>
        <p>Skirt: {skirtType}</p>
        <p>Fabric: {fabric}</p>
      </div>

      <div className="ps-1 space-y-1 text-xs text-dark-light">
        <p>Length: {length}&quot;</p>
        <p>Sleeve Length: {sleeveLength}&quot;</p>
        <p>Chest: {chest}&quot;</p>
        <p>Waist: {waist}&quot;</p>
      </div>

      {request && (
        <div className="space-y-0.5">
          <h3 className="text-xs font-medium">Request/Info</h3>
          <div className="ps-1 text-xs text-dark-light">
            <p>{request}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizedProductInfo;