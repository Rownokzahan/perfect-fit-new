import clsx from "clsx";

interface DropdownNoItemsProps {
  label: string;
}

const DropdownNoItems = ({ label }: DropdownNoItemsProps) => {
  return (
    <div
      className={clsx(
        "w-full sm:w-48 h-10 px-4 border rounded bg-light-light text-dark-light",
        "flex items-center justify-between gap-2"
      )}
    >
      <span className="text-nowrap truncate">{label}</span>
    </div>
  );
};

export default DropdownNoItems;
