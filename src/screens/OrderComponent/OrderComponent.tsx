import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { HeaderSection } from "./sections/HeaderSection";

export const OrderComponent = (): JSX.Element => {
  // Action buttons data for mapping
  const actionButtons = [
    { label: "Apply", className: "bg-[#20c86c] hover:bg-[#1ab15e]" },
    { label: "Row Clear", className: "bg-[#faa720] hover:bg-[#e99615]" },
    { label: "Save", className: "bg-[#2c97cd] hover:bg-[#2588ba]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative flex flex-col">
        {/* Action Buttons Section at the top */}
        <div className="w-full">
          <ActionButtonsSection />
          <Separator className="mx-10 my-0" />
        </div>

        {/* Order Component Heading */}
        <h1 className="text-2xl font-bold text-[#2c97cd] px-10 py-4">Order Component</h1>

        {/* Header Section */}
        <HeaderSection />
        <Separator className="mx-9" />

        {/* Data Table Section */}
        <DataTableSection />

        {/* Bottom Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`w-[138px] h-10 rounded-lg ${button.className} font-['Mulish',Helvetica] font-semibold text-white text-sm`}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
