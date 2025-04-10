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

export const FilterSection = (): JSX.Element => {
  // Local state for each input
  const [styleNumber, setStyleNumber] = useState<string>("");
  const [orderNo, setOrderNo] = useState<string>("");
  const [initialDate, setInitialDate] = useState<Date | null>(null);
  const [component, setComponent] = useState<string>("");

  return (
    <div className="flex flex-col w-full items-start gap-5 mt-4 px-10">
      <div className="flex items-center gap-3 w-full flex-wrap">

        {/* Style Number (Select) */}
        <div className="w-full max-w-[331px]">
          <Select value={styleNumber} onValueChange={setStyleNumber}>
            <SelectTrigger className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#505050] placeholder-[#bbbbbb] px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Style Number*" />
               
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="style1">Style 1</SelectItem>
              <SelectItem value="style2">Style 2</SelectItem>
              <SelectItem value="style3">Style 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Order No. (Text Input) */}
        <div className="w-full max-w-[331px]">
          <Input
            placeholder="Order No."
            value={orderNo}
            onChange={(e) => setOrderNo(e.target.value)}
            className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#505050] placeholder-[#bbbbbb] px-4"
          />
        </div>

        {/* Initial Date (Date Picker with Icon) */}
        <div className="w-full max-w-[331px] relative">
          <input
            type="text"
            value={initialDate ? initialDate.toLocaleDateString() : ""}
            placeholder="Initial Date*"
            readOnly
            className="h-12 w-full px-4 py-2 pr-12 rounded-lg border border-solid border-[#bbbbbb] text-black font-light text-base bg-white"
          />

          <DatePicker
            selected={initialDate}
            onChange={(date: Date) => setInitialDate(date)}
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

        {/* Component (Select) */}
        <div className="w-full max-w-[331px]">
          <Select value={component} onValueChange={setComponent}>
            <SelectTrigger className="w-full h-12 border border-[#bbbbbb] rounded-lg font-[Mulish] font-medium text-[#505050] placeholder-[#bbbbbb] px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Component" />
             
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comp1">Component 1</SelectItem>
              <SelectItem value="comp2">Component 2</SelectItem>
              <SelectItem value="comp3">Component 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
