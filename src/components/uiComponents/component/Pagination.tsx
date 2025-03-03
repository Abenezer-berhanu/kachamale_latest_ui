"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  siblingCount?: number;
}

export default function Pagination({
  totalPages,
  siblingCount = 1,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    replace(`${pathname}?${params.toString()}`);
  };

  const generatePageNumbers = () => {
    const pages = new Set<number>();

    pages.add(1);
    pages.add(totalPages);

    for (
      let i = Math.max(2, currentPage - siblingCount);
      i <= Math.min(totalPages - 1, currentPage + siblingCount);
      i++
    ) {
      pages.add(i);
    }

    return Array.from(pages).sort((a, b) => a - b);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {/* Previous Button */}
      <button
        className="px-3 py-1 border rounded-md bg-slate-200 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => updatePage(currentPage - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {generatePageNumbers().map((page, index, arr) => (
        <div key={page} className="flex items-center">
          <button
            className={`px-3 py-1 border rounded-md ${
              page === currentPage ? "bg-main_blue text-white" : "bg-slate-100"
            }`}
            onClick={() => updatePage(page)}
          >
            {page}
          </button>

          {/* Add ellipsis if there's a gap */}
          {index < arr.length - 1 && arr[index + 1] - page > 1 && (
            <span>...</span>
          )}
        </div>
      ))}

      {/* Next Button */}
      <button
        className="px-3 py-1 border rounded-md bg-slate-200 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => updatePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
