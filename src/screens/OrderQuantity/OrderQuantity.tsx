import React from "react";
import { Button } from "../../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { ApplyButtonSection } from "./sections/ApplyButtonSection";
import { ComponentListSection } from "./sections/ComponentListSection";
import { DefaultColorSizeSection } from "./sections/DefaultColorSizeSection";
import { ListingSection } from "./sections/ListingSection/ListingSection";
import { OrderQuantitySection } from "./sections/OrderQuantitySection/OrderQuantitySection";
import { QuantityEntrySection } from "./sections/QuantityEntrySection";
import { RowClearButtonSection } from "./sections/RowClearButtonSection";
import { TotalQuantitySection } from "./sections/TotalQuantitySection/TotalQuantitySection";

export const OrderQuantity = (): JSX.Element => {
  // Pagination data
  const paginationData = {
    currentPage: 1,
    totalPages: 7,
    totalItems: 63,
    itemsPerPage: 20,
    showingStart: 1,
    showingEnd: 20,
  };

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative flex flex-col">
        {/* Top section with row clear button */}
        <div className="w-full">
          <RowClearButtonSection />
          <Separator className="mx-10 my-0" />
        </div>

        {/* Header section with title and action buttons */}
        <div className="flex justify-between items-center px-10 py-6">
          <h1 className="font-semibold text-2xl font-['Mulish',Helvetica]">
            Order Quantity
          </h1>

          <div className="flex items-start gap-3">
            <Button className="bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto">
              <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
                Default Colour Size
              </span>
            </Button>

            <Button className="bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto">
              <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
                Total Quantity
              </span>
            </Button>
          </div>
        </div>

        {/* Order Quantity Section */}
        <OrderQuantitySection />
        <Separator className="mx-10 my-0" />

        {/* Middle sections with 4 columns */}
        <div className="flex flex-row gap-4 px-10 py-6">
          <div className="flex-1">
            <DefaultColorSizeSection />
          </div>
          <div className="flex-1">
            <QuantityEntrySection />
          </div>
          <div className="flex-1">
            <ComponentListSection />
          </div>
          <div className="flex-1">
            <TotalQuantitySection />
          </div>
        </div>
        <Separator className="mx-10 my-0" />

        {/* Listing Section */}
        <div className="px-10 pt-6">
          <h2 className="font-semibold text-lg text-[#2c97cd] font-['Mulish',Helvetica]">
            Listing
          </h2>
        </div>
        <ListingSection />

        {/* Pagination */}
        <div className="flex justify-between items-center px-10 py-4">
          <div></div> {/* Empty div for spacing */}
          <div className="flex items-center gap-[22px]">
            <div className="font-['Mulish',Helvetica] text-sm">
              <span className="text-black leading-4">
                Showing {paginationData.showingStart} –{" "}
                {paginationData.showingEnd}
              </span>
              <span className="text-[#999ca0] leading-4">
                {" "}
                of {paginationData.totalItems}
              </span>
            </div>

            <Pagination>
              <PaginationContent className="flex items-center gap-[19px]">
                <PaginationPrevious className="h-4 w-4" />
                <div className="font-normal text-[#2c97cd] tracking-[24px] leading-4 font-['Mulish',Helvetica] text-sm whitespace-nowrap">
                  34567
                </div>
                <PaginationNext className="h-4 w-4" />
              </PaginationContent>
            </Pagination>

            <div className="flex items-center gap-3.5">
              <span className="font-['Mulish',Helvetica] font-normal text-[#2c97cd] text-sm leading-4">
                Go to page
              </span>

              <div className="inline-flex flex-col items-center justify-center px-1 py-0.5 bg-[#2c97cd] rounded-sm">
                <span className="font-normal text-white leading-4 font-['Mulish',Helvetica] text-sm">
                  5
                </span>
              </div>

              <Select defaultValue="10">
                <SelectTrigger className="inline-flex h-auto w-auto px-1 py-0.5 bg-[#2c97cd] rounded-sm text-white border-none">
                  <SelectValue className="font-normal text-white leading-4 font-['Mulish',Helvetica] text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Separator className="mx-10 my-0" />

        {/* Bottom action buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          <Button className="w-[138px] bg-[#20c86c] text-white rounded-lg px-4 py-3 h-auto">
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Apply
            </span>
          </Button>

          <Button className="w-[138px] bg-[#faa720] text-white rounded-lg px-4 py-3 h-auto">
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Row Clear
            </span>
          </Button>

          <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto">
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Save
            </span>
          </Button>
        </div>

        {/* Include ApplyButtonSection as required */}
        <ApplyButtonSection />
      </div>
    </div>
  );
};
