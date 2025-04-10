import { CalendarIcon, CheckIcon } from "lucide-react";
import React, { useState, forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const CalendarInput = ({
  selectedDate,
  setSelectedDate,
  placeholder,
  id,
}: {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  placeholder: string;
  id: string;
}) => {
  const datePickerRef = useRef<any>(null);

  return (
    <div className="relative w-full">
      <input
        type="text"
        readOnly
        value={selectedDate ? format(selectedDate, "PPP") : ""}
        placeholder={placeholder}
        className={`h-12 w-full cursor-default rounded-md border border-[#bbbbbb] bg-transparent px-4 py-2 text-base font-medium text-[#505050] placeholder-[#bbbbbb] ${
          !selectedDate ? "text-[#bbbbbb]" : ""
        }`}
        onClick={() => datePickerRef.current.setOpen(true)}
      />
      <CalendarIcon
        className="absolute right-4 top-3.5 h-5 w-5 text-[#505050] cursor-pointer"
        onClick={() => datePickerRef.current.setOpen(true)}
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        ref={datePickerRef}
        customInput={<></>}
        id={id}
        popperPlacement="bottom-start"
      />
    </div>
  );
};

export const HeaderSection = (): JSX.Element => {
  // State variables
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  // Custom Input for DatePicker
  const CustomDateInput = forwardRef<HTMLButtonElement, any>(
    ({ value, onClick }, ref) => (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4 flex items-center justify-between text-left"
      >
        <span className={`${value ? "text-black" : "text-[#a1a1aa]"}`}>
          {value || "Initial Date*"}
        </span>
        <CalendarIcon className="w-5 h-5 text-black" />
      </button>
    )
  );
  CustomDateInput.displayName = "CustomDateInput";

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
         <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Vendor"
          />
        </div>

        {/* Amendment Toggle */}
        <div className="flex items-center gap-[53px] ">
          <div className="flex justify-center">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Show Details
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};
