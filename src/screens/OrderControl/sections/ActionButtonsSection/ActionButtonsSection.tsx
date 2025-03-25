import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const ActionButtonsSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    // Row 1
    [
      { name: "dueSeason", label: "Due Season*", hasDropdown: true },
      { name: "dueMonth", label: "Due Month*", hasDropdown: true },
      { name: "seasonYear", label: "Season Year*", hasCalendar: true },
      { name: "categoryDesc", label: "Category Desc*" },
    ],
    // Row 2
    [
      { name: "currency", label: "Currency*" },
      { name: "agent", label: "Agent" },
      { name: "customer", label: "Customer" },
      { name: "articleNo", label: "Article No." },
    ],
    // Row 3
    [
      { name: "qaName", label: "Q/A Name" },
      { name: "description", label: "Description" },
      { name: "payTerms", label: "Pay Terms" },
      { name: "shipMode", label: "Ship Mode*", hasDropdown: true },
    ],
    // Row 4
    [
      { name: "locations", label: "Locations" },
      { name: "templeNode", label: "Temple Node" },
      { name: "sizeGroup", label: "Size Group*" },
      { name: "styleGroup", label: "Style Group" },
    ],
    // Row 5
    [
      { name: "styleDesc", label: "Style Desc" },
      { name: "orderDesc", label: "Order Desc" },
      { name: "rate", label: "Rate*" },
      { name: "repeat", label: "Repeat" },
    ],
  ];

  return (
    <section className="flex flex-col w-full items-start gap-5 opacity-[0.46]">
      {formFields.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex items-center gap-3 relative self-stretch w-full"
        >
          {row.map((field, fieldIndex) => (
            <div
              key={`field-${rowIndex}-${fieldIndex}`}
              className="flex w-full items-center gap-[17px] relative"
            >
              {field.hasDropdown ? (
                <Select>
                  <SelectTrigger className="w-full h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] font-['Mulish',Helvetica] font-medium text-[#bbbbbb]">
                    <SelectValue placeholder={field.label} />
                    <ChevronDownIcon className="h-4 w-4 ml-auto" />
                  </SelectTrigger>
                </Select>
              ) : field.hasCalendar ? (
                <div className="w-full flex h-12 items-center gap-2.5 px-4 py-2 relative rounded-lg border border-solid border-[#bbbbbb]">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-['Mulish',Helvetica] font-medium text-[#bbbbbb] text-base">
                      {field.label}
                    </span>
                    <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />
                  </div>
                </div>
              ) : (
                <Input
                  className="w-full h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] font-['Mulish',Helvetica] font-medium text-[#bbbbbb]"
                  placeholder={field.label}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
