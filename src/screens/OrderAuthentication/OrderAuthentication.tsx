import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { FilterSection } from "./sections/FilterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OrderTableSection } from "./sections/OrderTableSection/OrderTableSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const OrderAuthentication = (): JSX.Element => {
  // Pagination data
  const paginationData = {
    currentPage: 1,
    totalPages: 7,
    totalItems: 63,
    itemsPerPage: 20,
    showingStart: 1,
    showingEnd: 20,
  };

  // Action buttons data
  const actionButtons = [
    { label: "Apply", color: "bg-[#20c86c]" },
    { label: "Row Clear", color: "bg-[#faa720]" },
    { label: "Save", color: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative">
        {/* Main Content Section */}
        <MainContentSection />

       

        <div className="w-full px-10">
          {/* Line separator after header */}
          <Separator className="my-4" />

          {/* Title */}
          <h1 className="font-semibold text-black text-2xl [font-family:'Mulish',Helvetica] mb-4">
            Order Authentication
          </h1>

          {/* Filter Section */}
          <FilterSection />

          {/* Order Table Section */}
          <OrderTableSection />

          {/* Line separator before pagination */}
          <Separator className="my-4" />

          {/* Pagination Section */}
          <PaginationSection />

          {/* Pagination info and controls */}
          <div className="flex justify-end items-center gap-[22px] mb-6">
            <div className="font-normal text-sm [font-family:'Mulish',Helvetica]">
              <span className="text-black leading-4">
                Showing {paginationData.showingStart} –{" "}
                {paginationData.showingEnd}
              </span>
              <span className="text-[#999ca0] leading-4">
                {" "}
                of {paginationData.totalItems}
              </span>
            </div>

            <div className="flex items-center gap-[19px]">
              <ChevronLeftIcon className="text-[#2c97cd] cursor-pointer" />
              <div className="font-normal text-[#2c97cd] tracking-[24.00px] leading-4 [font-family:'Mulish',Helvetica] text-sm whitespace-nowrap">
                34567
              </div>
              <ChevronRightIcon className="text-[#2c97cd] cursor-pointer" />
            </div>

            <div className="flex items-center gap-3.5">
              <div className="[font-family:'Mulish',Helvetica] font-normal text-[#2c97cd] text-sm leading-4">
                Go to page
              </div>
              <div className="flex items-center justify-center px-1 py-0.5 bg-[#2c97cd] rounded-sm">
                <div className="font-normal text-white leading-4 [font-family:'Mulish',Helvetica] text-sm">
                  5
                </div>
              </div>
              <div className="flex items-center gap-[3px] px-1 py-0.5 bg-[#2c97cd] rounded-sm">
                <div className="font-normal text-white leading-4 [font-family:'Mulish',Helvetica] text-sm">
                  10
                </div>
                <img
                  className="w-[7px] h-[4.77px]"
                  alt="Vector"
                  src="https://c.animaapp.com/m8vjj4jeHh0doS/img/vector-269.svg"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[25px] justify-center my-8">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                className={`${button.color} w-[138px] text-white font-semibold text-sm [font-family:'Mulish',Helvetica] rounded-lg`}
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
