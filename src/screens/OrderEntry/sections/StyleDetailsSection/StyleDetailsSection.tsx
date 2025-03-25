import { CalendarIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const StyleDetailsSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    // Row 1
    [
      { name: "Due Season*", hasDropdown: true },
      { name: "Due Month*", hasDropdown: true },
      { name: "Season Year*", hasCalendar: true },
      { name: "Category Desc*", hasDropdown: false },
    ],
    // Row 2
    [
      { name: "Currency*", hasDropdown: false },
      { name: "Agent", hasDropdown: false },
      { name: "Customer", hasDropdown: false },
      { name: "Article No.", hasDropdown: false },
    ],
    // Row 3
    [
      { name: "Q/A Name", hasDropdown: false },
      { name: "Description", hasDropdown: false },
      { name: "Pay Terms", hasDropdown: false },
      { name: "Ship Mode*", hasDropdown: true },
    ],
    // Row 4
    [
      { name: "Locations", hasDropdown: false },
      { name: "Temple Node", hasDropdown: false },
      { name: "Size Group*", hasDropdown: false },
      { name: "Style Group", hasDropdown: false },
    ],
    // Row 5
    [
      { name: "Style Desc", hasDropdown: false },
      { name: "Order Desc", hasDropdown: false },
      { name: "Rate*", hasDropdown: false },
      { name: "Repeat", hasDropdown: false },
    ],
  ];

  return (
    <div className="flex flex-col w-full gap-5">
      {formFields.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3 w-full">
          {row.map((field, fieldIndex) => (
            <div key={`field-${rowIndex}-${fieldIndex}`} className="flex-1">
              {field.hasDropdown ? (
                <Select>
                  <SelectTrigger className="h-12 w-full font-mulish-14-sp-medium text-[#bbbbbb]">
                    <SelectValue placeholder={field.name} />
                  </SelectTrigger>
                </Select>
              ) : field.hasCalendar ? (
                <div className="relative w-full">
                  <Input
                    className="h-12 w-full font-mulish-14-sp-medium text-[#bbbbbb] pl-4 pr-10"
                    placeholder={field.name}
                  />
                  <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#bbbbbb]" />
                </div>
              ) : (
                <Input
                  className="h-12 w-full font-mulish-14-sp-medium text-[#bbbbbb]"
                  placeholder={field.name}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
