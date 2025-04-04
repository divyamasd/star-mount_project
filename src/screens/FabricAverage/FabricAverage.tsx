import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";
import { Navbar } from "../../components/Navbar/Navbar";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { SummarySection } from "./sections/SummarySection/SummarySection";


export const FabricAverage = (): JSX.Element => {
  // Data for radio options
  const radioOptions = [
    { id: "pattern", label: "Pattern Average", checked: true },
    { id: "cad", label: "Cad Average", checked: false },
    { id: "layer", label: "Layer Average", checked: false },
    { id: "subComponent", label: "Sub Component wise Average", checked: false },
  ];

  // Data for pagination
  const paginationData = {
    currentPage: 1,
    totalPages: 7,
    totalItems: 63,
    itemsPerPage: 20,
  };

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

      <div className="w-full max-w-[1440px] mx-auto">
        {/* Title and Action Buttons */}
        <div className="flex justify-between items-center px-10 py-6">
          <h1 className="font-semibold text-2xl font-['Mulish',Helvetica]">
            Fabric Average
          </h1>

          <div className="flex items-start gap-3">
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg">
              Default Colour Size
            </Button>
            <Button className="bg-[#2c97cd] text-white font-semibold text-sm rounded-lg">
              Total Quantity
            </Button>
          </div>
        </div>

        <Separator className="mx-10" />

        {/* Filter Section */}
        <FilterSection />

        {/* Radio Options */}
        <div className="flex items-start gap-[47px] px-10 py-6">
          <RadioGroup defaultValue="pattern" className="flex space-x-12">
            {radioOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <div className="relative w-6 h-6">
                  {option.checked ? (
                    <div className="relative w-4 h-4 top-1 left-1 bg-[#2c97cd] rounded" />
                  ) : (
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="absolute top-[3px] left-[3px]"
                    />
                  )}
                </div>
                <label
                  htmlFor={option.id}
                  className="font-['Mulish',Helvetica] font-medium text-[#6c6c6c] text-base"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator className="mx-10" />

        {/* Summary Section */}
        <SummarySection />

        <Separator className="mx-10" />

        {/* Pagination Section */}
        <PaginationSection />

        {/* Pagination Controls */}
        <div className="flex justify-between items-center px-10 py-4">
          <div className="flex-1"></div>

          <div className="flex items-center gap-[22px]">
            <div className="font-['Mulish',Helvetica] text-sm">
              <span className="text-black">Showing 1 – 20</span>
              <span className="text-[#999ca0]"> of 63</span>
            </div>

            <div className="flex items-center gap-[19px]">
              <Button variant="ghost" size="icon" className="p-0">
                <ChevronLeftIcon className="h-4 w-4 text-[#2c97cd]" />
              </Button>

              <div className="font-normal text-[#2c97cd] tracking-[24px] font-['Mulish',Helvetica] text-sm">
                34567
              </div>

              <Button variant="ghost" size="icon" className="p-0">
                <ChevronRightIcon className="h-4 w-4 text-[#2c97cd]" />
              </Button>
            </div>

            <div className="flex items-center gap-3.5">
              <span className="font-['Mulish',Helvetica] font-normal text-[#2c97cd] text-sm">
                Go to page
              </span>

              <div className="bg-[#2c97cd] rounded-sm px-1 py-0.5">
                <span className="font-normal text-white font-['Mulish',Helvetica] text-sm">
                  5
                </span>
              </div>

              <div className="bg-[#2c97cd] rounded-sm px-1 py-0.5 flex items-center gap-[3px]">
                <span className="font-normal text-white font-['Mulish',Helvetica] text-sm">
                  10
                </span>
                <img
                  className="w-[7px] h-[4.77px]"
                  alt="Vector"
                  src="https://c.animaapp.com/m8vgn850ySdIeE/img/vector-269.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="mx-10" />

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              className={`${button.color} text-white font-semibold text-sm rounded-lg w-[138px]`}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
