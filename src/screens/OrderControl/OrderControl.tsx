import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { ExportSection } from "./sections/ExportSection";
import { ImportSection } from "./sections/ImportSection/ImportSection";
import { OrderDetailsSection } from "./sections/OrderDetailsSection";
import { OrderEntrySection } from "./sections/OrderEntrySection/OrderEntrySection";
import { StyleDetailsSection } from "./sections/StyleDetailsSection/StyleDetailsSection";

export const OrderControl = (): JSX.Element => {
  // Navigation menu items
  const navigationItems = [
    { id: 1, name: "Order Entry", active: true },
    { id: 2, name: "Order Quantity", active: false },
    { id: 3, name: "Order Final Fabric Detail", active: false },
    { id: 4, name: "Order Exchange", active: false },
    { id: 5, name: "Order Component", active: false },
    { id: 6, name: "Fabric Planning", active: false },
    { id: 7, name: "Fabric Average", active: false },
    { id: 8, name: "Accessory Details", active: false },
    { id: 9, name: "Packing Details", active: false },
    { id: 10, name: "Production Plan Details", active: false },
  ];

  return (
    <div className="bg-[#fafbfb] flex flex-col min-h-screen">
      <StyleDetailsSection />
      
      <div className="flex flex-1">
        {/* Navigation Menu */}
        <div className="w-[221px] mt-4 shadow-[0px_4px_4px_#00000040]">
          <Card className="flex flex-col w-full items-start rounded">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-2 pl-[68px] pr-[9px] py-2 relative self-stretch w-full ${
                  item.active
                    ? "bg-[#0076bc1a] text-foundationprimay-blueblue-500"
                    : "text-foundation-greygrey-500"
                } rounded-[0px_8px_8px_0px] backdrop-blur-[75px] backdrop-brightness-[100%]`}
              >
                <div className="relative w-fit mt-[-1.00px] font-mulish-12-sp-regular text-[12px] tracking-[0] leading-[140%] whitespace-nowrap">
                  {item.name}
                </div>
                {item.active && (
                  <img
                    className="h-[31px] top-0 left-9 absolute w-0.5"
                    alt="Rectangle"
                    src="https://c.animaapp.com/m8o543k4QHwU7w/img/rectangle-1060.svg"
                  />
                )}
              </div>
            ))}
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-8 py-4">
          {/* Export/Domestic Toggle */}
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              className="px-4 py-3 border border-solid border-[#2c98cd] text-[#2c97cd] rounded-lg mr-2"
            >
              Export
            </Button>
            <Button className="px-4 py-3 bg-[#2c97cd] text-white rounded-lg">
              Domestics
            </Button>
          </div>

          {/* Order Entry Section */}
          <OrderEntrySection />

          {/* Order Details Section */}
          <div className="mt-8">
            <h2 className="text-[#2c97cd] text-lg font-semibold mb-4">
              Order Details
            </h2>
            <OrderDetailsSection />
          </div>

          <Separator className="my-8" />

          {/* Radio Group for Domestic/Export/Both */}
          <div className="mb-4">
            <RadioGroup
              defaultValue="domestic"
              className="flex items-center gap-[53px]"
            >
              <div className="flex items-center gap-1.5">
                <RadioGroupItem
                  value="domestic"
                  id="domestic"
                  className="w-4 h-4 bg-[#2c97cd]"
                />
                <label
                  htmlFor="domestic"
                  className="font-medium text-foundationgreygrey-300 text-base"
                >
                  Domestic
                </label>
              </div>
              <div className="flex items-center gap-1.5">
                <RadioGroupItem value="export" id="export" />
                <label
                  htmlFor="export"
                  className="font-medium text-foundationgreygrey-300 text-base"
                >
                  Export
                </label>
              </div>
              <div className="flex items-center gap-1.5">
                <RadioGroupItem
                  value="both"
                  id="both"
                  className="w-4 h-4 bg-[#2c97cd]"
                />
                <label
                  htmlFor="both"
                  className="font-medium text-foundationgreygrey-300 text-base"
                >
                  Both
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Import Section */}
          <ImportSection />

          <div className="flex justify-center mt-4">
            <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg">
              Import
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Style Details Section */}
          <div className="mt-8">
            <h2 className="text-[#2c97cd] text-lg font-semibold mb-4">
              Style Details
            </h2>
            <ExportSection />
          </div>

          {/* Action Buttons Section */}
          <ActionButtonsSection />

          <Separator className="my-8" />

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-center gap-[25px] mb-8">
            <Button className="w-[138px] bg-[#20c86c] text-white rounded-lg">
              Apply
            </Button>
            <Button className="w-[138px] bg-[#faa720] text-white rounded-lg">
              Row Clear
            </Button>
            <Button className="w-[138px] bg-[#2c97cd] text-white rounded-lg">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
