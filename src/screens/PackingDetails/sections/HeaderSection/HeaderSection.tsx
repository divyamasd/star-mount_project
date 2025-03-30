import { CalendarIcon, CheckIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
} from "../../../../components/ui/select";

export const HeaderSection = (): JSX.Element => {
  // Data for select fields
  const selectFields = [
    { id: 1, label: "Style Number*", icon: "dropdown" },
    { id: 2, label: "Order Number*", icon: "dropdown" },
    { id: 3, label: "Initial Date*", icon: "calendar" },
  ];

  return (
    <div className="flex items-center gap-3 w-full">
      {selectFields.map((field) => (
        <div key={field.id} className="flex items-center gap-[17px] w-[331px]">
          <Select>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg">
              <div className="flex items-center justify-between w-full">
                <span className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-100 text-base">
                  {field.label}
                </span>
                {field.icon === "calendar" && (
                  <CalendarIcon className="h-5 w-5 text-foundationgreygrey-100" />
                )}
              </div>
            </SelectTrigger>
            <SelectContent>
              {/* Dropdown content would go here */}
            </SelectContent>
          </Select>
        </div>
      ))}

      <div className="flex items-center gap-[53px]">
        <div className="flex items-center gap-1.5">
          <div className="relative w-6 h-6">
            <div className="relative w-4 h-4 top-1 left-1 bg-[#2c97cd] rounded flex items-center justify-center">
              <CheckIcon className="h-3 w-3 text-white" />
            </div>
          </div>
          <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
            Amendment
          </div>
        </div>
      </div>
    </div>
  );
};
