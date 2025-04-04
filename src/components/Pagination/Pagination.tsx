import React from "react";
import { Pagination, PaginationContent, PaginationPrevious, PaginationNext } from "../ui/pagination";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";

interface PaginationControlsProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (count: number) => void;
}

export const PaginationControls = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationControlsProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const showingStart = (currentPage - 1) * itemsPerPage + 1;
  const showingEnd = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex justify-end items-center gap-6 px-6 py-4">
     
      <div className="flex items-center gap-[22px]">
        <div className="font-['Mulish',Helvetica] text-sm whitespace-nowrap mr-4">
          <span className="text-black leading-4">
            Showing {showingStart} – {showingEnd}
          </span>
          <span className="text-[#999ca0] leading-4"> of {totalItems}  </span>
        </div>

        <Pagination>
            <PaginationContent className="flex items-center justify-end gap-4 pr-4">
                {/* Previous Button with right margin */}
                <div className="mr-4">
                <PaginationPrevious
                    className="h-4 w-4"
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                />
                </div>

                {/* Page numbers with tracking and spacing */}
                <div className="flex gap-2 font-normal text-[#2c97cd] tracking-wider leading-4 font-['Mulish',Helvetica] text-sm">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                    key={i}
                    className={`px-2 py-1 rounded ${
                        currentPage === i + 1 ? "font-bold bg-[#2c97cd] text-white" : ""
                    }`}
                    onClick={() => onPageChange(i + 1)}
                    >
                    {i + 1}
                    </button>
                ))}
                </div>

                {/* Next Button with left margin */}
                <div className="ml-4">
                <PaginationNext
                    className="h-4 w-4"
                    onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                />
                </div>
            </PaginationContent>
            </Pagination>


        <div className="flex items-center gap-3.5 whitespace-nowrap">
          <span className="font-['Mulish',Helvetica] font-normal text-[#2c97cd] text-sm leading-4">
            Go to page
          </span>

          <Select onValueChange={(value) => onPageChange(Number(value))}>
            <SelectTrigger className="inline-flex h-auto w-auto px-1 py-0.5 bg-[#2c97cd] rounded-sm text-white border-none">
                <SelectValue placeholder={currentPage.toString()} />
            </SelectTrigger>

            <SelectContent>
                {Array.from({ length: totalPages }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                    Page {i + 1}
                </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
