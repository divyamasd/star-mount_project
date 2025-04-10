import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";

export const DefaultColorSizeSection = (): JSX.Element => {
  // Define options data for mapping
  const options = [
    { id: "copy-style", label: "Copy Style No.", checked: true },
    { id: "quantity-wise", label: "Quantity Wise Entry", checked: false },
    { id: "group-wise", label: "Group Wise Entry", checked: false },
    {
      id: "group-quantity-wise",
      label: "Group Quantity Wise Entry",
      checked: false,
    },
    { id: "copy", label: "Copy", checked: false },
    { id: "amendment", label: "Amendment", checked: false },
    { id: "duplicate", label: "Duplicate BO#/Art", checked: false },
  ];

  return (
    <div className="flex flex-col items-start py-4 h-full justify-between">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <Checkbox
            id={option.id}
            checked={option.checked}
            className={
              option.checked
                ? "data-[state=checked]:bg-[#2c97cd] data-[state=checked]:border-[#2c97cd]"
                : ""
            }
          />
          <label
            htmlFor={option.id}
            className="font-['Mulish',Helvetica] font-medium text-[#6c6c6c] text-base leading-[19.2px]"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
