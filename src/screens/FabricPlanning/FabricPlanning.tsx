import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { Navbar } from "../../components/Navbar/Navbar";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ItemListSection } from "./sections/ItemListSection/ItemListSection";
import { SummarySection } from "./sections/SummarySection/SummarySection";

export const FabricPlanning = (): JSX.Element => {
  // Action button data for mapping
  const actionButtons = [
    { text: "Apply", bgColor: "bg-[#20c86c]" },
    { text: "Row Clear", bgColor: "bg-[#faa720]" },
    { text: "Save", bgColor: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative flex flex-col">
        {/* Filters Section */}
        <div className="w-full">
          <Navbar />
        </div>
        
        {/* Header and Title */}
        <div className="px-10 pt-6">
          <h1 className="font-['Mulish',Helvetica] font-semibold text-black text-2xl">
            Fabric Planning
          </h1>
          <HeaderSection />
        </div>
        <Separator className="mx-9 mt-6" />
        {/* Summary Section */}
        <div className="px-10">
          <SummarySection />
        </div>

        <Separator className="mx-9 mt-6" />

        {/* Item List Section */}
        <div className="px-10">
          <ItemListSection />
        </div>

        <Separator className="mx-9 mt-6" />
        
        {/* Action Buttons Section */}
        <div className="px-10">
          <ActionButtonsSection />
        </div>

        <Separator className="mx-9 mt-6" />

        {/* Bottom Action Buttons */}
        <div className="flex items-center justify-center gap-[25px] py-8">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`${button.bgColor} w-[138px] text-white font-['Mulish',Helvetica] font-semibold text-sm`}
              onClick={() => alert("clicked")}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
