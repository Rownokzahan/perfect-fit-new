"use client";

import useQueryParams from "@/hooks/useQueryParams";
import clsx from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const { queryParams, setQueryParam } = useQueryParams();

  if (totalPages <= 1) return null;

  const currentPage = Number(queryParams.get("page") || "1");
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const updatePage = (page: number) => {
    setQueryParam("page", page.toString());
  };

  const baseButton = clsx(
    "size-8 rounded-full border grid place-items-center",
    "bg-light-light text-dark-light text-sm",
    "disabled:bg-dark/5 disabled:text-dark/40"
  );

  return (
    <div className="flex items-center justify-center gap-2 my-12 flex-wrap">
      {/* Prev Button */}
      <button
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={baseButton}
        aria-label="Previous Page"
      >
        <BiChevronLeft size={20} />
      </button>

      {/* Page Buttons */}
      {pages.map((pageNumber) => {
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            className={clsx(
              baseButton,
              isActive && "bg-primary border-primary text-light"
            )}
            onClick={() => updatePage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={baseButton}
        aria-label="Next Page"
      >
        <BiChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
