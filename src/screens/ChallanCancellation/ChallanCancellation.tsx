import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PackingDetailsSection } from "./sections/PackingDetailsSection/PackingDetailsSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

import { Navbar } from "../../components/Navbar/Navbar";

export const ChallanCancellation = (): JSX.Element => {
  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative flex flex-col">
        {/* Top section with ListingSection */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Title */}
        <div className="flex justify-between items-center p-10 pb-6">
          <h1 className="font-semibold text-2xl [font-family:'Mulish',Helvetica]">
          Challan Cancellation
          </h1>
        </div>

        <div className="flex flex-col w-full">
          <HeaderSection />
         
          <Separator className="mx-10 my-6" />

          <PaginationSection />

          <Separator className="mx-10 my-6" />

          {/* Action buttons at bottom */}
          <div className="flex justify-center items-center gap-[25px] py-8">
            <Button className="w-[138px] bg-[#20c86c] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Apply
            </Button>
            <Button className="w-[138px] bg-[#faa720] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Row Clear
            </Button>
            <Button className="w-[138px] bg-[#2c97cd] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

