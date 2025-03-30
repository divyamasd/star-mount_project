import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FilterSection = (): JSX.Element => {
  // Data for the filter options
  const filterOptions = [
    { id: 1, label: "Order From", hasCalendar: false },
    { id: 2, label: "Order to Date", hasCalendar: false },
    { id: 3, label: "Order to Date*", hasCalendar: true },
  ];

  // Data for checkbox options
  const checkboxOptions = [
    { id: 1, label: "To Be Verify", checked: true },
    { id: 2, label: "Already", checked: false },
  ];

  return (
    <div className="flex items-center gap-3 w-full py-4">
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center gap-[17px] flex-1">
          <div className="relative w-full h-12">
            <Select>
              <SelectTrigger className="w-full h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] font-[Mulish,Helvetica]">
                <div className="flex items-center justify-between w-full">
                  <SelectValue
                    placeholder={option.label}
                    className="font-medium text-foundationgreygrey-100 text-base leading-[19.2px]"
                  />
                  {option.hasCalendar ? (
                    <CalendarIcon className="w-5 h-5 text-foundationgreygrey-100" />
                  ) : (
                    <ChevronDownIcon className="w-[9.33px] h-[5.1px] text-foundationgreygrey-100" />
                  )}
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-[53px]">
        {checkboxOptions.map((option) => (
          <div key={option.id} className="flex items-center gap-1.5">
            <Checkbox
              id={`checkbox-${option.id}`}
              className="w-6 h-6 rounded"
              defaultChecked={option.checked}
            />
            <label
              htmlFor={`checkbox-${option.id}`}
              className="font-[Mulish,Helvetica] font-medium text-foundationgreygrey-300 text-base leading-[19.2px]"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
