import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { PackingDetailsSection } from "./sections/PackingDetailsSection/PackingDetailsSection";
import { ProcessListSection } from "./sections/ProcessListSection/ProcessListSection";

export const ProductionPlan = (): JSX.Element => {
  // Pagination data
  const paginationData = {
    currentPage: 1,
    totalItems: 63,
    itemsPerPage: 20,
    totalPages: 7,
  };

  // Action buttons data
  const actionButtons = [
    { label: "Apply", color: "bg-[#20c86c]" },
    { label: "Row Clear", color: "bg-[#faa720]" },
    { label: "Save", color: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-col justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative">
        {/* Action Buttons Section at the top */}
        <ActionButtonsSection />

        <div className="px-10">
          <Separator className="w-full mt-[69px]" />

          {/* Packing Details Header */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="font-mulish font-semibold text-2xl">
              Packing Details
            </h2>
            <Button className="bg-[#2c97cd] text-white font-semibold rounded-lg">
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

          {/* Pagination */}
          <div className="flex items-center justify-end gap-6 mb-6">
            <div className="text-sm">
              <span className="text-black">Showing 1 – 20</span>
              <span className="text-[#999ca0]"> of 63</span>
            </div>

            <div className="flex items-center gap-5">
              <ChevronLeftIcon className="text-[#2c97cd] cursor-pointer" />
              <div className="tracking-[24px] text-[#2c97cd] text-sm font-mulish">
                34567
              </div>
              <ChevronRightIcon className="text-[#2c97cd] cursor-pointer" />
            </div>

            <div className="flex items-center gap-3.5">
              <span className="text-[#2c97cd] text-sm font-mulish">
                Go to page
              </span>
              <div className="px-1 py-0.5 bg-[#2c97cd] rounded-sm">
                <span className="text-white text-sm">5</span>
              </div>
              <div className="px-1 py-0.5 bg-[#2c97cd] rounded-sm flex items-center gap-1">
                <span className="text-white text-sm">10</span>
                <img
                  className="w-[7px] h-[4.77px]"
                  alt="Vector"
                  src="https://c.animaapp.com/m8vhfiyhwMjB4R/img/vector-269.svg"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons at the bottom */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                className={`${button.color} text-white font-semibold w-[138px] rounded-lg`}
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
