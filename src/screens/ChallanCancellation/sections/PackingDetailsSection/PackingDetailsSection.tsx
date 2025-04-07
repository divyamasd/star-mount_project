import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const PackingDetailsSection = (): JSX.Element => {
  // Data for the select dropdowns
  const styleNumbers = ["Style 1", "Style 2", "Style 3"];
  const orderNumbers = ["Order 1", "Order 2", "Order 3"];

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex items-center gap-[17px] w-full">
        <Select>
          <SelectTrigger className="h-12 w-full font-[Mulish] font-medium text-foundationgreygrey-100 text-base">
            <SelectValue placeholder="Style Number*" />
          </SelectTrigger>
          <SelectContent>
            {styleNumbers.map((style, index) => (
              <SelectItem
                key={index}
                value={style.toLowerCase().replace(" ", "-")}
              >
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-[17px] w-full">
        <Select>
          <SelectTrigger className="h-12 w-full font-[Mulish] font-medium text-foundationgreygrey-100 text-base">
            <SelectValue placeholder="Order Number*" />
          </SelectTrigger>
          <SelectContent>
            {orderNumbers.map((order, index) => (
              <SelectItem
                key={index}
                value={order.toLowerCase().replace(" ", "-")}
              >
                {order}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
