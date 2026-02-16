import { LuPackageSearch } from "react-icons/lu";

const NoProductFound = () => {
  return (
    <div className="text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <LuPackageSearch className="text-6xl mx-auto" />

      <h3 className="mt-4 font-medium text-xl">No product found.</h3>
    </div>
  );
};

export default NoProductFound;
