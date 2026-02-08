import Button from "@/components/ui/Button";
import { TbShoppingBagSearch } from "react-icons/tb";

const NoCartItemFound = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="ui-container text-center">
        <TbShoppingBagSearch className="mx-auto text-6xl" />

        <h3 className="mt-4 font-semibold text-xl">
          Your shopping bag is empty
        </h3>

        <p className="mt-3 text-dark-light">
          Looks like you haven&apos;t added any dresses to your shopping bag yet.
        </p>

        <Button href="/dresses" className="w-max mx-auto mt-6">
          Go Shopping
        </Button>
      </div>
    </div>
  );
};

export default NoCartItemFound;
