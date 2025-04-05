import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { DefaultColorSizeSection } from "./sections/DefaultColorSizeSection";
import { ListingSection } from "./sections/ListingSection/ListingSection";
import { OrderQuantitySection } from "./sections/OrderQuantitySection/OrderQuantitySection";
import { QuantityEntrySection } from "./sections/QuantityEntrySection";
import { Navbar } from "../../components/Navbar/Navbar";

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
      <div className="bg-background-color w-full relative">
        {/* Top section with row clear button */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Header section with title and action buttons */}
        <div className="flex justify-between items-center px-10 py-6">
          <h1 className="font-semibold text-2xl font-['Mulish',Helvetica]">
            Order Quantity
          </h1>

          <div className="flex items-start gap-3">
            <Button className="bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto" onClick={() => alert("clicked")}>
              <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
                Default Colour Size
              </span>
            </Button>

            <Button className="bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto" onClick={() => alert("clicked")}>
              <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
                Total Quantity
              </span>
            </Button>
          </div>
        </div>
        <div className="px-10 mt-6">
          <div className="flex rounded-2xl">
            <div className="w-full">
              <OrderQuantitySection />
            </div>
            </div>
        </div>
       
       <Separator className="mx-9 mt-6" />

        {/* Middle sections with 4 columns */}
        <div className="flex flex-row gap-4 px-10 py-6">
          <div className="flex-1">
            <DefaultColorSizeSection />
          </div>
          <div className="flex-1">
            <QuantityEntrySection />
          </div>
          <div className="flex-1">
            <QuantityEntrySection />
          </div>
          <div className="flex-1">
            <QuantityEntrySection />
          </div>
        </div>

        <Separator className="mx-10 my-0" />

        {/* Listing Section */}
        <div className="px-10 pt-6">
          <h2 className="font-semibold text-lg text-[#2c97cd] font-['Mulish',Helvetica]">
            Listing
          </h2>
          <ListingSection />
        </div>
       
        <Separator className="mx-10 my-0" />

        {/* Bottom action buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          <Button className="w-[138px] bg-[#20c86c] text-white rounded-lg px-4 py-3 h-auto" onClick={() => alert("clicked")}>
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Apply
            </span>
          </Button>

          <Button className="w-[138px] bg-[#faa720] text-white rounded-lg px-4 py-3 h-auto" onClick={() => alert("clicked")}>
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Row Clear
            </span>
          </Button>

          <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto" onClick={() => alert("clicked")}>
            <span className="font-semibold text-sm leading-[14px] font-['Mulish',Helvetica]">
              Save
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
};
