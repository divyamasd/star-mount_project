import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const FabricDetailsSection = (): JSX.Element => {
  // Define form field data for mapping
  const formRows = [
    [
      { name: "Item Group", hasDropdown: true },
      { name: "Item sub Group", hasDropdown: true },
      { name: "Content", hasDropdown: false },
      { name: "Count", hasDropdown: false },
    ],
    [
      { name: "Construction", hasDropdown: false },
      { name: "Width", hasDropdown: false },
      { name: "Thickness", hasDropdown: false },
      { name: "GSM", hasDropdown: false },
    ],
    [
      { name: "Fabric Colour", hasDropdown: false },
      { name: "Print", hasDropdown: false },
      { name: "Price Per Unit", hasDropdown: false },
      { name: "Item Quantity", hasDropdown: false },
    ],
  ];

  return (
    <section className="flex flex-col w-full items-start gap-5">
      {/* Map through the first three rows of form fields */}
      {formRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3 w-full">
          {row.map((field, fieldIndex) => (
            <div key={`field-${rowIndex}-${fieldIndex}`} className="flex-1">
              {field.hasDropdown ? (
                <Select>
                  <SelectTrigger className="w-full h-12 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]">
                    <SelectValue placeholder={field.name} />
                  </SelectTrigger>
                </Select>
              ) : (
                <Input
                  className="w-full h-12 px-4 py-2 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]"
                  placeholder={field.name}
                />
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Last row with remarks fields */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1">
          <Input
            className="w-full h-12 px-4 py-2 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]"
            placeholder="Remarks"
          />
        </div>
        <div className="flex-[3]">
          <Input
            className="w-full h-12 px-4 py-2 border-[#bbbbbb] [font-family:'Mulish',Helvetica] font-medium text-[#bbbbbb]"
            placeholder="Remarks"
          />
        </div>
      </div>
    </section>
  );
};
