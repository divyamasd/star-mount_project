import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/button";
//import { Calendar } from "../../../../components/ui/calendar";
//import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover";
import { format } from "date-fns";

export const HeaderSection = (): JSX.Element => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Mock data for dropdowns
  const styleNumbers = ["Style 1", "Style 2", "Style 3"];
  const orderNumbers = ["Order 1", "Order 2", "Order 3"];
  /*
  <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`h-12 w-full justify-start border border-[#bbbbbb] bg-transparent text-left font-normal ${
                date ? "text-[#505050]" : "text-[#bbbbbb]"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Initial Date*</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>*/

  return (
    <div className="flex w-full items-center gap-3 px-10 py-6">
      <div className="flex-1">
        <Select>
          <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
            <SelectValue placeholder="Style Number*" />
          </SelectTrigger>
          <SelectContent>
            {styleNumbers.map((style) => (
              <SelectItem key={style} value={style}>{style}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        
          
            <Button
              variant="outline"
              className={`h-12 w-full justify-start border border-[#bbbbbb] bg-transparent text-left font-normal ${
                date ? "text-[#505050]" : "text-[#bbbbbb]"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Initial Date*</span>}
            </Button>
          
        
        
      </div>

      <div className="flex-1">
        <Select>
          <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
            <SelectValue placeholder="Order Number*" />
          </SelectTrigger>
          <SelectContent>
            {orderNumbers.map((order) => (
              <SelectItem key={order} value={order}>{order}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <Input
          className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
          placeholder="PO /BO Number"
        />
      </div>
    </div>
  );
};
