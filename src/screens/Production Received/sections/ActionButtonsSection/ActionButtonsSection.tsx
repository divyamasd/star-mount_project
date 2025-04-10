import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const ActionButtonsSection = (): JSX.Element => {
  // Data for the filter fields
  const filterFields = [
    {
      id: "delivery-date",
      label: "Excess on Delivery Date",
      type: "date",
      icon: <CalendarIcon className="w-5 h-5 text-[#bbbbbb]" />,
    },
    {
      id: "country",
      label: "Country",
      type: "select",
      icon: (
        <ChevronDownIcon className="w-[9.33px] h-[5.09px] text-[#bbbbbb]" />
      ),
    },
    {
      id: "colour",
      label: "Colour",
      type: "select",
      icon: (
        <ChevronDownIcon className="w-[9.33px] h-[5.09px] text-[#bbbbbb]" />
      ),
    },
    {
      id: "size",
      label: "Size",
      type: "input",
      icon: null,
    },
  ];

  return (
    <div className="flex items-center gap-3 w-full">
      {filterFields.map((field) => (
        <div key={field.id} className="flex items-center gap-[17px] flex-1">
          {field.type === "date" ? (
            <div className="relative w-full h-12">
              <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 relative rounded-lg border border-solid border-[#bbbbbb]">
                <div className="flex items-center justify-between w-full">
                  <div className="[font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb] text-base tracking-[0] leading-[19.2px]">
                    {field.label}
                  </div>
                  {field.icon}
                </div>
              </div>
            </div>
          ) : field.type === "select" ? (
            <Select>
              <SelectTrigger className="w-full h-12 px-4 py-2 border border-solid border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb] text-base">
                <div className="flex items-center justify-between w-full">
                  <SelectValue placeholder={field.label} />
                  {field.icon}
                </div>
              </SelectTrigger>
            </Select>
          ) : (
            <div className="relative w-full h-12">
              <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 relative rounded-lg border border-solid border-[#bbbbbb]">
                <div className="flex items-center justify-between w-full">
                  <div className="[font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb] text-base tracking-[0] leading-[19.2px]">
                    {field.label}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
