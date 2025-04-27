import { Button } from "../../../../components/ui/button";
import React, { useState, forwardRef, useRef } from "react";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  // State variables
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-3 w-full px-10 mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Style Number */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={fromDate}
            setSelectedDate={setFromDate}
            placeholder="From Date*"
            id="fromDatePicker"
          />
        </div>

        {/* Order Number */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={toDate}
            setSelectedDate={setToDate}
            placeholder="To Date*"
            id="toDatePicker"
          />
        </div>

        {/* Initial Date */}
        <div className="w-[331px]">
          <div className="flex justify-center">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Import
            </Button>
          </div>
        </div>

        {/* Amendment Toggle */}
        <div className="flex items-center gap-[53px] mt-[2px]">
          
        </div>
      </div>

    </div>
  );
};
