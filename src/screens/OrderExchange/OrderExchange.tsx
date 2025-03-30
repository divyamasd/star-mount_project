import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ListingSection } from "./sections/ListingSection";

export const OrderExchange = (): JSX.Element => {
  // Pagination data
  const paginationData = {
    currentPage: 1,
    totalPages: 7,
    totalItems: 63,
    itemsPerPage: 20,
    pages: [1, 2, 3, 4, 5, 6, 7],
  };

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative flex flex-col">
        {/* Top section with ListingSection */}
        <div className="w-full">
          <ListingSection />
          <Separator className="mx-10" />
        </div>

        {/* Title */}
        <div className="px-10 pt-6">
          <h1 className="font-['Mulish',Helvetica] font-semibold text-black text-2xl">
            Order Exchange
          </h1>
        </div>

        {/* Header and Action Buttons sections */}
        <HeaderSection />
        <ActionButtonsSection />

        {/* Separator after action buttons */}
        <Separator className="mx-9 my-4" />

        {/* Apply Access button */}
        <div className="flex justify-end px-10 mb-4">
          <Button className="bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto">
            Apply Access
          </Button>
        </div>

        {/* Listing title */}
        <div className="px-10 mb-4">
          <h2 className="font-['Mulish',Helvetica] font-semibold text-[#2c97cd] text-lg">
            Listing
          </h2>
        </div>

        {/* Data Table Section */}
        <DataTableSection />

        {/* Pagination */}
        <div className="flex justify-end items-center gap-[22px] px-10 py-4">
          <div className="font-['Mulish',Helvetica] text-sm">
            <span className="text-black leading-4">Showing 1 – 20</span>
            <span className="text-[#999ca0] leading-4"> of 63</span>
          </div>

          <div className="flex items-center gap-[19px]">
            <img
              alt="Previous page"
              src="https://c.animaapp.com/m8vepbdgjWOCsS/img/frame-37163.svg"
            />
            <div className="font-['Mulish',Helvetica] font-normal text-[#2c97cd] text-sm tracking-[24.00px] leading-4">
              34567
            </div>
            <img
              alt="Next page"
              src="https://c.animaapp.com/m8vepbdgjWOCsS/img/frame-37164.svg"
            />
          </div>

          <div className="flex items-center gap-3.5">
            <div className="font-['Mulish',Helvetica] font-normal text-[#2c97cd] text-sm leading-4">
              Go to page
            </div>
            <div className="flex items-center justify-center px-1 py-0.5 bg-[#2c97cd] rounded-sm">
              <div className="font-['Mulish',Helvetica] font-normal text-white text-sm leading-4">
                5
              </div>
            </div>
            <div className="flex items-center gap-[3px] px-1 py-0.5 bg-[#2c97cd] rounded-sm">
              <div className="font-['Mulish',Helvetica] font-normal text-white text-sm leading-4">
                10
              </div>
              <img
                className="w-[7px] h-[4.77px]"
                alt="Dropdown"
                src="https://c.animaapp.com/m8vepbdgjWOCsS/img/vector-269.svg"
              />
            </div>
          </div>
        </div>

        {/* Separator before action buttons */}
        <Separator className="mx-9 mb-4" />

        {/* Bottom action buttons */}
        <div className="flex justify-center items-center gap-[25px] mb-6">
          <Button className="w-[138px] bg-[#20c86c] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm">
            Apply
          </Button>
          <Button className="w-[138px] bg-[#faa720] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm">
            Row Clear
          </Button>
          <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
