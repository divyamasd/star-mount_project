import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Separator } from "../../components/ui/separator";
import { HeaderSection } from "../OrderEntry/sections/HeaderSection/HeaderSection";

const orderControlOptions = [
  { label: "Order Entry", path: "/order-entry" },
  { label: "Order Quantity", path: "/order-quantity" },
  { label: "Order Final Fabric Detail", path: "/order-final-fabric-detail" },
  { label: "Order Exchange", path: "/order-exchange" },
  { label: "Order Component", path: "/order-component" },
  { label: "Fabric Planning", path: "/fabric-planning" },
  { label: "Fabric Average", path: "/fabric-average" },
  { label: "Accessory Details", path: "/accessory-details" },
  { label: "Packing Details", path: "/packing-details" },
  { label: "Production Plan Details", path: "/production-plan-details" },
];

export const OrderList = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafbfb] flex flex-row justify-center w-full">
      <div className="bg-background-color w-full max-w-[1440px] relative">
        {/* Header Section */}
        <div className="w-full">
          <HeaderSection />
          <Separator className="mx-10 mt-[69px]" />
        </div>

        {/* Order Control List */}
        <div className="px-10 mt-6">
          <Card className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-mulish font-semibold text-xl mb-4 text-[#2c97cd]">Order Control</h2>
            <div className="grid grid-cols-2 gap-4">
              {orderControlOptions.map((option) => (
                <Button
                  key={option.path}
                  variant="outline"
                  className="justify-start text-left font-mulish text-sm text-[#2c97cd] hover:bg-[#f0f9ff]"
                  onClick={() => navigate(option.path)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Title and Toggle Buttons */}
        <div className="flex justify-between items-center px-10 mt-6">
          <h1 className="font-mulish font-semibold text-2xl">Order List</h1>

          <div className="flex items-start gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="px-4 py-3 font-mulish font-semibold text-sm text-[#2c97cd] border-[#2c98cd] rounded-lg"
                >
                  Order Control
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {orderControlOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.path}
                    onClick={() => navigate(option.path)}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="px-4 py-3 font-mulish font-semibold text-sm bg-[#2c97cd] text-white rounded-lg">
              Domestics
            </Button>
          </div>
        </div>

        {/* Order List Content */}
        <div className="px-10 mt-6">
          <p className="font-mulish text-lg">This is the Order List page. Add your content here.</p>
        </div>
      </div>
    </div>
  );
};
