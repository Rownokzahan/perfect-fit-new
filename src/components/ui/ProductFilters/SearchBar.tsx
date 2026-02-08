"use client";

import useQueryParams from "@/hooks/useQueryParams";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { queryParams, setQueryParam } = useQueryParams();
  const [term, setTerm] = useState("");

  // Sync local state with URL when it changes
  useEffect(() => {
    const current = queryParams.get("search") || "";
    setTerm(current);
  }, [queryParams]);

  const handleSearch = (value: string) => {
    setTerm(value);
    setQueryParam("search", value);
  };

  return (
    <div className="w-full sm:w-48 h-10 relative">
      <input
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
        className="size-full ps-4 pe-8 py-2 rounded outline-1 outline-dark-light/30 text-dark-light font-medium bg-light-light"
      />
      <IoSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-dark-light" />
    </div>
  );
};

export default SearchBar;
