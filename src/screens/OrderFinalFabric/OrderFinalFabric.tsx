import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { CreateSelectFinalFabricSection } from "./sections/CreateSelectFinalFabricSection";
import { FabricDetailsSection } from "./sections/FabricDetailsSection/FabricDetailsSection";
import { FinalFabricPlanningSection } from "./sections/FinalFabricPlanningSection/FinalFabricPlanningSection";
import { ListingSection } from "./sections/ListingSection";

export const OrderFinalFabric = (): JSX.Element => {
  const [planningOptions, setPlanningOptions] = useState([
    { id: "finalFabric", label: "Final Fabric Planning", checked: true },
    { id: "greige", label: "Greige Booked Planning", checked: false },
  ]);

  const [fabricTypeOptions, setFabricTypeOptions] = useState([
    { id: "split", label: "Split", checked: true },
    { id: "dtm", label: "DTM", checked: false },
    { id: "readyFabric", label: "Ready Fabric", checked: false },
  ]);

  const handleCheckboxChange = (options, setOptions, id) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  // Pagination data
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 63;

  // Define action buttons data
  const detailActionButtons = [
    { label: "Add Colour Wise", variant: "outline", color: "#2c97cd" },
    { label: "Row Clear", variant: "outline", color: "#2c97cd" },
    { label: "Add", variant: "outline", color: "#2c97cd" },
    { label: "New", variant: "outline", color: "#2c97cd" },
    { label: "Save", variant: "default", color: "white", bgColor: "#2c97cd" },
  ];

  const mainActionButtons = [
    { label: "Apply", bgColor: "#20c86c" },
    { label: "Row Clear", bgColor: "#faa720" },
    { label: "Save", bgColor: "#2c97cd" },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative">
        {/* Header and Listing Section */}
        <div className="w-full">
          <ListingSection />
          <Separator className="mx-10 my-2" />
        </div>

        {/* Title */}
        <div className="px-10 py-4">
          <h1 className="font-semibold text-black text-2xl font-['Mulish',Helvetica]">
            Style Order Final Fabric Details
          </h1>
        </div>

        {/* Final Fabric Planning Section */}
        <FinalFabricPlanningSection />

        {/* Planning Options */}
        <div className="px-10 py-4 flex items-center gap-[53px]">
          {planningOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-1.5">
              <Checkbox
                id={option.id}
                checked={option.checked}
                onCheckedChange={() => handleCheckboxChange(planningOptions, setPlanningOptions, option.id)}
                className={
                  option.checked
                    ? "bg-[#2c97cd] data-[state=checked]:bg-[#2c97cd]"
                    : ""
                }
              />
              <label
                htmlFor={option.id}
                className="font-medium text-[#6c6c6c] text-base font-['Mulish',Helvetica]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <Separator className="mx-9 my-2" />

        {/* Create/Select Final Fabric */}
        <div className="px-10 py-4">
          <h2 className="font-semibold text-[#2c97cd] text-lg font-['Mulish',Helvetica]">
            Create / Select Final Fabric
          </h2>
        </div>

        {/* Create Select Final Fabric Section */}
        <CreateSelectFinalFabricSection />

        {/* Fabric Details Section */}
        <FabricDetailsSection />

        {/* Detail Action Buttons */}
        <div className="flex justify-end px-10 py-4 gap-3">
          {detailActionButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant === "outline" ? "outline" : "default"}
              className={`text-sm font-semibold ${button.variant === "outline" ? "text-[#2c97cd] border-[#2c98cd]" : `bg-[${button.bgColor}] text-${button.color}`}`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        <Separator className="mx-9 my-2" />

        {/* Listing Title */}
        <div className="px-10 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-[#2c97cd] text-lg font-['Mulish',Helvetica]">
            Listing
          </h2>

          {/* Fabric Type Options */}
          <div className="flex items-center gap-[53px]">
            {fabricTypeOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-1.5">
                <Checkbox
                  id={option.id}
                  checked={option.checked}
                  onCheckedChange={() => handleCheckboxChange(fabricTypeOptions, setFabricTypeOptions, option.id)}
                  className={
                    option.checked
                      ? "bg-[#2c97cd] data-[state=checked]:bg-[#2c97cd]"
                      : ""
                  }
                />
                <label
                  htmlFor={option.id}
                  className="font-medium text-[#6c6c6c] text-base font-['Mulish',Helvetica]"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons Section */}
        <ActionButtonsSection />

        {/* Pagination */}
        <div className="flex justify-end items-center px-10 py-4 gap-[22px]">
          <div className="text-sm font-normal">
            <span className="text-black">Showing 1 - 20</span>
            <span className="text-[#999ca0]"> of {totalPages}</span>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} />
              </PaginationItem>
              {[...Array(5)].map((_, index) => {
                const pageNumber = currentPage - 2 + index;
                if (pageNumber > 0 && pageNumber <= totalPages) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        isActive={pageNumber === currentPage}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <Separator className="mx-9 my-2" />

        {/* Main Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] py-6">
          {mainActionButtons.map((button, index) => (
            <Button
              key={index}
              className={`w-[138px] bg-[${button.bgColor}] text-white font-semibold text-sm hover:opacity-90`}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
