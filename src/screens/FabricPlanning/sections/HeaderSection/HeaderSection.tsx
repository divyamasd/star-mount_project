import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const HeaderSection = (): JSX.Element => {
  // Data for the select fields
  const selectFields = [
    { id: 1, name: "Buyer", icon: <ChevronDownIcon className="h-4 w-4" /> },
    { id: 2, name: "Style", icon: <ChevronDownIcon className="h-4 w-4" /> },
    { id: 3, name: "Order", icon: <CalendarIcon className="h-5 w-5" /> },
  ];

  return (
    <section className="flex items-center gap-3 w-full">
      {selectFields.map((field) => (
        <div
          key={field.id}
          className="flex items-center gap-[17px] w-full max-w-[331px]"
        >
          <Select>
            <SelectTrigger className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#bbbbbb]">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder={field.name} />
                {field.icon}
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ))}
    </section>
  );
};
