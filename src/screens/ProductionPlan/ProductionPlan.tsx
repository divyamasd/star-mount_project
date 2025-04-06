import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { PackingDetailsSection } from "./sections/PackingDetailsSection/PackingDetailsSection";
import { ProcessListSection } from "./sections/ProcessListSection/ProcessListSection";
import { Navbar } from "../../components/Navbar/Navbar";

export const ProductionPlan = (): JSX.Element => {

  // Action buttons data
  const actionButtons = [
    { label: "Apply", color: "bg-[#20c86c]" },
    { label: "Row Clear", color: "bg-[#faa720]" },
    { label: "Save", color: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-col justify-center w-full">
      <div className="bg-background-color w-full relative">
        {/* Action Buttons Section at the top */}
        <Navbar />

        <div className="px-10">

          {/* Packing Details Header */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="font-mulish font-semibold text-2xl">
              Packing Details
            </h2>
            <Button className="bg-[#2c97cd] text-white font-semibold rounded-lg" onClick={() => alert("Domestics clicked")}>
              Import
            </Button>
          </div>

          {/* Packing Details Section */}
          <div className="mt-4 rounded-2xl">
            <PackingDetailsSection />
          </div>

          {/* First Separator */}
          <Separator className="w-full my-6" />

          {/* Process List Section */}
          <ProcessListSection />

          {/* Second Separator */}
          <Separator className="w-full my-6" />

          {/* Action Buttons at the bottom */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                className={`${button.color} text-white font-semibold w-[138px] rounded-lg`}
                onClick={() => alert("clicked")}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
