import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Navbar } from "../../components/Navbar/Navbar";
import { ImportSection } from "./sections/ImportSection";
import { OrderDetailsSection } from "./sections/OrderDetailsSection";
import { OrderEntrySection } from "./sections/OrderEntrySection";
import { StyleDetailsSection } from "./sections/StyleDetailsSection";
import { Checkbox } from "../../components/ui/checkbox";

export const OrderEntry = (): JSX.Element => {
  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative">
        {/* Header Section */}
        <div className="w-full">
          <Navbar />
        </div>

        {/* Title and Toggle Buttons */}
        <div className="flex justify-between items-center px-10 mt-6">
          <h1 className="font-mulish font-semibold text-2xl">Order Entry</h1>

          <div className="flex items-start gap-3">
            <Button
              variant="outline"
              className="px-4 py-3 font-mulish font-semibold text-sm text-[#2c97cd] border-[#2c98cd] rounded-lg"
              onClick={() => alert("Export clicked")}
            >
              Export
            </Button>
            <Button className="px-4 py-3 font-mulish font-semibold text-sm bg-[#2c97cd] text-white rounded-lg" onClick={() => alert("Domestics clicked")}>
              Domestics
            </Button>
          </div>
        </div>

        {/* Order Entry and Export Options Sections */}
        <div className="px-10 mt-6">
          <div className="flex rounded-2xl">
            <div className="w-full">
              <OrderEntrySection />
            </div>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="px-10 mt-6">
          <h2 className="font-mulish font-semibold text-lg text-[#2c97cd] mb-4">
            Order Details
          </h2>
          <OrderDetailsSection />
        </div>

        <Separator className="mx-9 mt-6" />

        <div className="px-10 mt-6">
          <div className="flex items-center gap-[53px]">
            <div className="flex items-center gap-1.5">
              <Checkbox id="domestic" className="w-4 h-4 border-blue" />
              <label
                htmlFor="domestic"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Domestic
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox id="export" className="w-4 h-4 border-blue" />
              <label
                htmlFor="export"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Export
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox id="both" className="w-4 h-4 border-buek" />
              <label
                htmlFor="both"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Both
              </label>
            </div>
          </div>
        </div>
        {/* Import Section */}
        <div className="px-10 mt-6">
          <ImportSection />
          <div className="flex justify-center mt-4">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Import
            </Button>
          </div>
        </div>

        <Separator className="mx-9 mt-6" />

        {/* Style Details Section */}
        <div className="px-10 mt-6">
          <h2 className="font-mulish font-semibold text-lg text-[#2c97cd] mb-4">
            Style Details
          </h2>
          <StyleDetailsSection />
        </div>

        <Separator className="mx-9 mt-6" />

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-[25px] my-6">
          <Button className="w-[138px] bg-[#20c86c] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
            Apply
          </Button>
          <Button className="w-[138px] bg-[#faa720] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
            Row Clear
          </Button>
          <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
