import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const HeaderSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <section className="flex flex-col gap-5 w-full mt-6">
      <div className="flex items-center gap-3 w-full">

        {/* Select Input */}
        <div className="w-full max-w-[331px]">
          <Select>
            <SelectTrigger className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#505050] placeholder-[#bbbbbb] px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Buyer" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Text Input */}
        <div className="w-full max-w-[331px]">
          <Input
            placeholder="PO / BO Number"
            className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#505050] placeholder-[#bbbbbb] px-4"
          />
        </div>

        {/* Date Input (like working implementation) */}
        <div className="w-full max-w-[331px] relative">
          {/* Read-only styled input */}
          <input
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
            placeholder="Order Date"
            readOnly
            className="h-12 w-full px-4 py-2 pr-12 rounded-lg border border-solid border-[#bbbbbb] text-black font-light text-base bg-white"
          />

          {/* DatePicker triggered by icon button */}
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
            popperPlacement="bottom-end"
            dateFormat="PPP"
            customInput={
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <CalendarIcon className="w-5 h-5 text-black cursor-pointer" />
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};
