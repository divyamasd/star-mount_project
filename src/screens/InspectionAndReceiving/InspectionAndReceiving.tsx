import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { Navbar } from "../../components/Navbar/Navbar";


export const InspectionAndReceiving = (): JSX.Element => {
 
  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative flex flex-col">
        {/* Top section with ListingSection */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Title */}
        <div className="px-10 py-6">
          <h1 className="font-['Mulish',Helvetica] font-semibold text-black text-2xl">
          Inspection & Receiving 
          </h1>
        </div>

        {/* Header and Action Buttons sections */}
        <HeaderSection />
       

        {/* Separator after action buttons */}
        <Separator className="mx-9 my-4" />

        

        {/* Listing title */}
        <div className="px-10 mb-4">
          {/* Data Table Section */}
          <DataTableSection />
        </div>

        {/* Separator before action buttons */}
        <Separator className="mx-9 mb-4" />

        {/* Bottom action buttons */}
        <div className="flex justify-center items-center gap-[25px] mb-6">
          <Button className="w-[138px] bg-[#20c86c] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm" onClick={() => alert("clicked")}>
            Apply
          </Button>
          <Button className="w-[138px] bg-[#faa720] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm" onClick={() => alert("clicked")}>
            Row Clear
          </Button>
          <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg px-4 py-3 h-auto font-['Mulish',Helvetica] font-semibold text-sm" onClick={() => alert("clicked")}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
