import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { SelectInput } from "../../components/FormInputs/SelectInput";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";

import { NavbarNewModule } from "../../components/Navbar/NavbarNewModule";
const options = ["one", "two", "three"];

export const ActivityMaster = (): JSX.Element => {
  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full relative flex flex-col">
        {/* Top section with ListingSection */}
        <div className="w-full">
          <NavbarNewModule />
        </div>

        <div className="flex flex-col gap-3 w-full px-10 mt-6">
      {/* Row 1 */}
          <div className="flex items-center gap-3 w-full flex-wrap">
           
            <div className="w-[331px]">
              <h1 className="font-semibold text-2xl [font-family:'Mulish',Helvetica]">
                Activity Master
              </h1>
            </div>

            
            <div className="w-[331px]">
              
            </div>
            <div className="w-[331px]">
              <div className="mt-5 flex gap-[53px]">
                          <div className="flex items-center gap-1.5">
                            <Checkbox id="new-entry" className="w-4 h-4 border border-blue" />
                            <Label htmlFor="new-entry" className="font-medium text-foundationgreygrey-300 text-base">
                              Default Format
                            </Label>
                          </div>
              
                          <div className="flex items-center gap-1.5">
                            <Checkbox id="style-entry" className="w-4 h-4 border border-blue" />
                            <Label htmlFor="style-entry" className="font-medium text-foundationgreygrey-300 text-base">
                              Buyer Format
                            </Label>
                          </div>
                        </div>
            </div>

            {/* Initial Date */}
            <div className="w-[331px]">
            <SelectInput
                name = "buyer name"
                options={options}
                placeholder = "Buyer Name"
                id = "buyer name"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col w-full">
          <Separator className="mx-10 my-6" />

          <PaginationSection />

          <Separator className="mx-10 my-6" />

          {/* Action buttons at bottom */}
          <div className="flex justify-center items-center gap-[25px] py-8">
            <Button className="w-[138px] bg-[#20c86c] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Apply
            </Button>
            <Button className="w-[138px] bg-[#faa720] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Row Clear
            </Button>
            <Button className="w-[138px] bg-[#2c97cd] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

