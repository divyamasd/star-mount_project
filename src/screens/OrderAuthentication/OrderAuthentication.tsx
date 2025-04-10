
import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { FilterSection } from "./sections/FilterSection";

import { Navbar } from "../../components/Navbar/Navbar";

import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const OrderAuthentication = (): JSX.Element => {

  // Action buttons data
  const actionButtons = [
    { label: "Apply", color: "bg-[#20c86c]" },
    { label: "Row Clear", color: "bg-[#faa720]" },
    { label: "Save", color: "bg-[#2c97cd]" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative">
        {/* Main Content Section */}
        <Navbar />

       

        <div className="w-full px-10 py-6">

          {/* Title */}
          <h1 className="font-semibold text-black text-2xl [font-family:'Mulish',Helvetica] mb-4">
            Order Authentication
          </h1>

          {/* Filter Section */}
          <FilterSection />


          {/* Line separator before pagination */}
          <Separator className="my-4" />

          {/* Pagination Section */}
          <PaginationSection />


          {/* Action Buttons */}
          <div className="flex items-center gap-[25px] justify-center my-8">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                className={`${button.color} w-[138px] text-white font-semibold text-sm [font-family:'Mulish',Helvetica] rounded-lg`}
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
