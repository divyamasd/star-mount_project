import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Navbar } from "../../components/Navbar/Navbar";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { HeaderSection } from "./sections/HeaderSection";

export const OtherProcessControl = (): JSX.Element => {
  // Action buttons data for mapping
  const actionButtons = [
    { label: "Apply", className: "bg-[#20c86c] hover:bg-[#1ab15e]" },
    { label: "Row Clear", className: "bg-[#faa720] hover:bg-[#e99615]" },
    { label: "Save", className: "bg-[#2c97cd] hover:bg-[#2588ba]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative">
        {/* Action Buttons Section at the top */}
        <div className="w-full">
          <Navbar />
        </div>
         <div className="flex justify-between items-center px-10 mt-6">
           <h1 className="font-mulish font-semibold text-2xl">Other Process Control</h1>
         </div>
        
        {/* Header Section */}
        <HeaderSection />
        <Separator className="mx-9 mt-6" />

        {/* Data Table Section */}
        <DataTableSection />

        <Separator className="mx-9 mt-6" />

        {/* Bottom Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`w-[138px] h-10 rounded-lg ${button.className} font-['Mulish',Helvetica] font-semibold text-white text-sm`}
              onClick={() => alert("Export clicked")}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
