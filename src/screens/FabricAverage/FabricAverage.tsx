import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

import { Separator } from "../../components/ui/separator";
import { Navbar } from "../../components/Navbar/Navbar";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { ListingSection } from "./sections/ListingSection/ListingSection";
import { SummarySection } from "./sections/SummarySection/SummarySection";


export const FabricAverage = (): JSX.Element => {

  // Data for action buttons
  const actionButtons = [
    { label: "Apply", color: "bg-[#20c86c]" },
    { label: "Row Clear", color: "bg-[#faa720]" },
    { label: "Save", color: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-col justify-center w-full">
      {/* Navbar */}
      <Navbar />

      <div className="w-full mx-auto">
        {/* Title and Action Buttons */}
        <div className="flex justify-between items-center px-10 py-6">
          <h1 className="font-semibold text-2xl font-['Mulish',Helvetica]">
            Fabric Average
          </h1>

          <div className="flex items-start gap-3">
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Default Colour Size
            </Button>
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Total Quantity
            </Button>
          </div>
        </div>

        {/* Filter Section */}
        <FilterSection />

        <Separator className="mx-10 my-6" />

        <SummarySection />

        <Separator className="mx-10 my-6" />

        <ListingSection />

        <Separator className="mx-10" />

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`${button.color} text-white font-semibold text-sm rounded-lg w-[138px]`}
              onClick={() => alert("clicked")}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
