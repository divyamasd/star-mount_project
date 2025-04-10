import { CalendarIcon, CheckIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

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

export const ImportSection = (): JSX.Element => {
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  
  const styleNumbers = ["Company 1", "Company 2", "Company 3"];
  const orderNumbers = ["Order 1", "Order 2", "Order 3"];
  

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Style No." />
            </SelectTrigger>
            <SelectContent>
              {styleNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Order Number" />
            </SelectTrigger>
            <SelectContent>
              {orderNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={deliveryDate}
            setSelectedDate={setDeliveryDate}
            placeholder="Delivery Date"
            id="DatePicker"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-center ">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Import
            </Button>
          </div>
        </div>
      </div>     
    </>
  );
};
