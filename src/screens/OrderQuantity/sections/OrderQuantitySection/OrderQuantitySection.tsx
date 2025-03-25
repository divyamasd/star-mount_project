import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OrderQuantitySection = (): JSX.Element => {
  // Form field data for mapping
  const topRowFields = [
    {
      id: "styleNumber",
      label: "Style Number*",
      type: "select",
      icon: (
        <ChevronDownIcon className="h-[9.33px] w-[9.33px] text-[#bbbbbb]" />
      ),
    },
    {
      id: "deliveryDate",
      label: "Delivery Date*",
      type: "date",
      icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
    },
    {
      id: "initialDate",
      label: "Initial Date*",
      type: "date",
      icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
    },
    {
      id: "excessNumber",
      label: "Excess Number*",
      type: "select",
      icon: (
        <ChevronDownIcon className="h-[9.33px] w-[9.33px] text-[#bbbbbb]" />
      ),
    },
  ];

  const bottomRowFields = [
    { id: "orderNo", label: "Order No.", type: "input" },
    { id: "sizeGroup", label: "Size Group", type: "input" },
    { id: "orderQty", label: "Order qty.", type: "input" },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-5">
      {/* Top row of fields */}
      <div className="flex items-center gap-3 w-full">
        {topRowFields.map((field) => (
          <div key={field.id} className="flex w-full items-center gap-[17px]">
            {field.type === "select" ? (
              <Select>
                <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg font-mulish-14-sp-medium">
                  <div className="flex justify-between items-center w-full">
                    <SelectValue
                      placeholder={field.label}
                      className="text-[#bbbbbb] text-base"
                    />
                    {field.icon}
                  </div>
                </SelectTrigger>
              </Select>
            ) : field.type === "date" ? (
              <div className="relative w-full h-12">
                <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]">
                  <div className="flex justify-between items-center w-full">
                    <div className="font-medium text-[#bbbbbb] text-base font-['Mulish',Helvetica]">
                      {field.label}
                    </div>
                    {field.icon}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Bottom row of fields */}
      <div className="flex items-center gap-3 w-full">
        {bottomRowFields.map((field) => (
          <div key={field.id} className="flex w-full items-center gap-[17px]">
            <div className="relative w-full h-12">
              <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]">
                <div className="flex items-center">
                  <div className="font-medium text-[#bbbbbb] text-base font-['Mulish',Helvetica]">
                    {field.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
