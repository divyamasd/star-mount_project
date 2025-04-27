import {CheckIcon} from "lucide-react";
import React, { useState, forwardRef, useRef } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  // State variables
  const [initialDate, setInitialDate] = useState<Date | null>(null);

  const [isAmendment, setIsAmendment] = useState(false);
  const options = ["one", "two", "three"];


  return (
    <div className="flex flex-col gap-3 w-full px-10 mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Style Number */}
        <div className="w-[331px]">
          <SelectInput
            name = "style number"
            options={options}
            placeholder = "Style number*"
            id = "style number"
          />
        </div>

        {/* Order Number */}
        <div className="w-[331px]">
          <SelectInput
            name = "order number"
            options={options}
            placeholder = "Order number*"
            id = "order number"
          />
        </div>

        {/* Initial Date */}
        <div className="w-[331px]">
          <CalendarInput
            selectedDate={initialDate}
            setSelectedDate={setInitialDate}
            placeholder="Initial Date*"
            id="initialDatePicker"
          />
        </div>

        {/* Amendment Toggle */}
        <div className="flex items-center gap-[53px] mt-[2px]">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={() => setIsAmendment(!isAmendment)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                  isAmendment ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                }`}
              >
                {isAmendment && <CheckIcon className="h-3 w-3 text-white" />}
              </div>
            </div>
            <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
              Amendment
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Buyer Name */}
        <div className="w-[331px]">
        <SelectInput
            name = "buyer"
            options={options}
            placeholder = "Buyer*"
            id = "buyer"
          />
        </div>

        {/* Order Type */}
        <div className="w-[331px]">
          <SelectInput
            name = "order type"
            options={options}
            placeholder = "Order type"
            id = "order type"
          />
        </div>
      </div>
    </div>
  );
};
