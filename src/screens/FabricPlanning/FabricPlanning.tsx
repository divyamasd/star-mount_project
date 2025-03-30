import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { FiltersSection } from "./sections/FiltersSection";
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
      <div className="bg-background-color w-full max-w-[1440px] relative flex flex-col">
        {/* Filters Section */}
        <div className="w-full">
          <FiltersSection />
          <img
            className="w-[1362px] mx-auto h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/m8vgbs93FlyGpM/img/line-68.svg"
          />
        </div>

        {/* Header and Title */}
        <div className="px-10 pt-6">
          <h1 className="font-['Mulish',Helvetica] font-semibold text-black text-2xl">
            Fabric Planning
          </h1>
          <HeaderSection />
        </div>

        {/* Summary Section */}
        <div className="px-10">
          <SummarySection />
        </div>

        {/* Item List Section */}
        <div className="px-10">
          <ItemListSection />
        </div>

        {/* Action Buttons Section */}
        <div className="px-10">
          <ActionButtonsSection />
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center justify-center gap-[25px] py-8">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`${button.bgColor} w-[138px] text-white font-['Mulish',Helvetica] font-semibold text-sm`}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
