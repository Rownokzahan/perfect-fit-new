"use client";

import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "../Dropdown";
import useQueryParams from "@/hooks/useQueryParams";

interface SORT {
  name: string;
  value: string;
}

const sortOptions: SORT[] = [
  { name: "Newest", value: "newest" },
  { name: "Price Low to High", value: "price-asc" },
  { name: "Price High to Low", value: "price-desc" },
  { name: "A - Z", value: "name-asc" },
  { name: "Z - A", value: "name-desc" },
];

const SortSelector = () => {
  const { queryParams, setQueryParam } = useQueryParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SORT | null>(sortOptions[0]);

  useEffect(() => {
    const sortFromURL = queryParams.get("sort");

    if (!sortFromURL) return;

    const matched = sortOptions.find((option) => option.value === sortFromURL);

    if (matched) {
      setSelected(matched);
    }
  }, [queryParams]);

  const handleSelect = (sort: SORT) => {
    setQueryParam("sort", sort.value);
    setSelected(sort);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={selected ? selected.name : "Sort By"}
    >
      {sortOptions.map((sort) => (
        <DropdownItem
          key={sort.value}
          label={sort.name}
          isSelected={selected?.value === sort.value}
          onClick={() => handleSelect(sort)}
        />
      ))}
    </Dropdown>
  );
};

export default SortSelector;
