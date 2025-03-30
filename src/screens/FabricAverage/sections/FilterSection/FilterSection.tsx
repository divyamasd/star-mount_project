import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FilterSection = (): JSX.Element => {
  // Filter options data
  const filterOptions = [
    {
      id: "styleNumber",
      label: "Style Number*",
      type: "select",
      required: true,
    },
    {
      id: "orderNo",
      label: "Order No.",
      type: "input",
      required: false,
    },
    {
      id: "initialDate",
      label: "Initial Date*",
      type: "date",
      required: true,
    },
    {
      id: "component",
      label: "Component",
      type: "select",
      required: false,
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-5 mt-4">
      <div className="flex items-center gap-3 w-full flex-wrap">
        {filterOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center gap-[17px] flex-1 min-w-[250px]"
          >
            <div className="relative w-full h-12">
              {option.type === "select" && (
                <Select>
                  <SelectTrigger className="w-full h-12 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]">
                    <SelectValue placeholder={option.label} />
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Select options would go here */}
                  </SelectContent>
                </Select>
              )}

              {option.type === "input" && (
                <Input
                  className="w-full h-12 px-4 py-2 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]"
                  placeholder={option.label}
                />
              )}

              {option.type === "date" && (
                <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 relative rounded-lg border border-solid border-[#bbbbbb]">
                  <div className="flex items-center justify-between w-full">
                    <div className="[font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb] text-base">
                      {option.label}
                    </div>
                    <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
