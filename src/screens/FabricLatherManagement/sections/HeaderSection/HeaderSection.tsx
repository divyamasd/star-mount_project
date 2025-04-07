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

export const HeaderSection = (): JSX.Element => {
  const [poDate, setpoDate] = useState<Date | null>(null);
  const [length, setLength] = useState<Date | null>(null);
  const [billingAt, setBillingAt] = useState<Date | null>(null);
  const [inhouseDueDate, setInhouseDueDate] = useState<Date | null>(null);
  const [isLeather, setIsLeather] = useState(false);
  const [isExtra, setIsExtra] = useState(false);
  const [deliScheduleDate, setDeliScheduleDate] = useState<Date | null>(null);

  const companyNumbers = ["Company 1", "Company 2", "Company 3"];
  const poNumbers = ["Order 1", "Order 2", "Order 3"];
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const widthNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Company" />
            </SelectTrigger>
            <SelectContent>
              {companyNumbers.map((company) => (
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
              <SelectValue placeholder="PO Number" />
            </SelectTrigger>
            <SelectContent>
              {poNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={poDate}
            setSelectedDate={setpoDate}
            placeholder="PO Date"
            id="poDatePicker"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={billingAt}
            setSelectedDate={setBillingAt}
            placeholder="Billing At"
            id="billingAtDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <CalendarInput
            selectedDate={inhouseDueDate}
            setSelectedDate={setInhouseDueDate}
            placeholder="Inhouse Due date*"
            id="inhouseDueDatePicker"
          />
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {vendorNumbers.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={deliScheduleDate}
            setSelectedDate={setDeliScheduleDate}
            placeholder="Deli Schedule"
            id="deliScheduleDatePicker"
          />
        </div>

        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Remarks"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Program"
          />
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Width" />
            </SelectTrigger>
            <SelectContent>
              {widthNumbers.map((order) => (
                <SelectItem key={order} value={order}>
                  {order}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={length}
            setSelectedDate={setLength}
            placeholder="Length"
            id="lengthPicker"
          />
        </div>

        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Mode of Dispatch"
          />
        </div>
      </div>
      
        <div className="px-10 py-6 flex gap-2">
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setIsExtra(!isExtra)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    isExtra ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {isExtra && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Is Leather
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setIsLeather(!isLeather)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    isLeather ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {isLeather && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Extra
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
