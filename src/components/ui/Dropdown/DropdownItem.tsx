import clsx from "clsx";

interface DropdownItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const DropdownItem = ({ label, isSelected, onClick }: DropdownItemProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={clsx(
          "w-full px-4 py-2 text-left truncate",
          isSelected
            ? "bg-primary text-light"
            : "bg-light-light hover:bg-light"
        )}
      >
        {label}
      </button>
    </li>
  );
};

export default DropdownItem;
