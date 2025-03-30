import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PackingDetailsSection } from "./sections/PackingDetailsSection/PackingDetailsSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { TableWrapperSection } from "./sections/TableWrapperSection/TableWrapperSection";

export const PackingDetails = (): JSX.Element => {
  return (
    <div className="bg-background-color flex flex-col justify-center w-full">
      <TableWrapperSection />
      <div className="w-full max-w-[1440px] relative flex flex-col mx-auto">
        {/* Header with title and buttons */}
        <div className="flex justify-between items-center p-10 pb-6">
          <h1 className="font-semibold text-2xl [font-family:'Mulish',Helvetica]">
            Packing Details
          </h1>
          <div className="flex items-center gap-3">
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg">
              Import
            </Button>
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg">
              Refresh
            </Button>
          </div>
        </div>

        <Separator className="mx-10" />

        {/* Main content sections */}
        <div className="flex flex-col w-full">
          <HeaderSection />
          <PackingDetailsSection />
          <Separator className="mx-10" />

          <PaginationSection />

          <Separator className="mx-10" />

          {/* Action buttons at bottom */}
          <div className="flex justify-center items-center gap-[25px] py-8">
            <Button className="w-[138px] bg-[#20c86c] text-white font-semibold text-sm rounded-lg">
              Apply
            </Button>
            <Button className="w-[138px] bg-[#faa720] text-white font-semibold text-sm rounded-lg">
              Row Clear
            </Button>
            <Button className="w-[138px] bg-[#2c97cd] text-white font-semibold text-sm rounded-lg">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
