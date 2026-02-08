"use client";

import { Dropdown, DropdownItem, DropdownNoItems } from "../Dropdown";
import { useMemo, useState } from "react";
import { Category } from "@/types/category";
import useQueryParams from "@/hooks/useQueryParams";

interface CategorySelectorProps {
  categories: Category[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  const { queryParams, setQueryParam } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);

  // 1. DERIVED STATE: Calculate the selected category directly from the URL
  const categorySlugFromURL = queryParams.get("category");

  const selected = useMemo(() => {
    return categories.find((c) => c.slug === categorySlugFromURL) || null;
  }, [categories, categorySlugFromURL]);

  if (categories.length === 0) {
    return <DropdownNoItems label="No category found" />;
  }

  const handleSelect = (category: Category | null) => {
    setQueryParam("category", category?.slug ?? "");
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={selected ? selected.name : "All Dresses"}
    >
      <DropdownItem
        label="All Dresses"
        isSelected={selected === null}
        onClick={() => handleSelect(null)}
      />

      {categories.map((category) => (
        <DropdownItem
          key={category._id}
          label={category.name}
          isSelected={selected?._id === category._id}
          onClick={() => handleSelect(category)}
        />
      ))}
    </Dropdown>
  );
};

export default CategorySelector;
