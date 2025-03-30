import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OrderTableSection = (): JSX.Element => {
  // Filter options data
  const filterOptions = [
    {
      id: "buyerName",
      label: "Buyer Name*",
      options: ["All Buyers", "Buyer 1", "Buyer 2", "Buyer 3"],
    },
    {
      id: "styleNumber",
      label: "Style Number*",
      options: ["All Styles", "Style 1", "Style 2", "Style 3"],
    },
    {
      id: "orderNumber",
      label: "Order Number*",
      options: ["All Orders", "Order 1", "Order 2", "Order 3"],
    },
  ];

  return (
    <section className="flex w-full items-center gap-3 py-4">
      {filterOptions.map((filter) => (
        <div key={filter.id} className="flex-1">
          <Select>
            <SelectTrigger className="w-full h-12 border border-foundationgreygrey-100 [font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-100">
              <SelectValue placeholder={filter.label} />
              <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              {filter.options.map((option) => (
                <SelectItem
                  key={option}
                  value={option.toLowerCase().replace(/\s+/g, "-")}
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </section>
  );
};
