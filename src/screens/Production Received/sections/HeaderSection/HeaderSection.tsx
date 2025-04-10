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
  const [Date, setDate] = useState<Date | null>(null);
  const [toBeVerified, setToBeVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  
  const companyNames = ["Company 1", "Company 2", "Company 3"];
  const receiverNumbers = ["Order 1", "Order 2", "Order 3"];
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const weayNumbers = ["1", " 2", " 3"];
  const invoiceNumbers = ["1", " 2", " 3"];
  const inspectionNumbers = ["1", " 2", " 3"];
  const gateNumbers = ["1", " 2", " 3"];
  const billNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Rec No.*" />
            </SelectTrigger>
            <SelectContent>
              {companyNames.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Rec Date"
            id="recDatePicker"
          />
        </div>

        <div className="flex-1">
          
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Department/Vendor*" />
            </SelectTrigger>
            <SelectContent>
              {receiverNumbers.map((company) => (
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
              <SelectValue placeholder="Process" />
            </SelectTrigger>
            <SelectContent>
              {vendorNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="PO No.*" />
            </SelectTrigger>
            <SelectContent>
              {invoiceNumbers.map((company) => (
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
              <SelectValue placeholder="Style Number*" />
            </SelectTrigger>
            <SelectContent>
              {weayNumbers.map((company) => (
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
              <SelectValue placeholder="Order Number*" />
            </SelectTrigger>
            <SelectContent>
              {inspectionNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Delivery Date"
            id="deliveryDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
        <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Time Zone" />
            </SelectTrigger>
            <SelectContent>
              {billNumbers.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Component" />
            </SelectTrigger>
            <SelectContent>
              {billNumbers.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Considate Qty."
            id="considateQtyDatePicker"
          />
        </div>

        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Country"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Req. Qty"
          />
        </div>

        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Challan Number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Challan Date"
            id="challanDatePicker"
          />
        </div>

        <div className="flex-1">
         <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Gate no." />
            </SelectTrigger>
            <SelectContent>
              {billNumbers.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Gate Entry Date"
            id="gateEntryDatePicker"
          />
        </div>

        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Location"
          />
        </div>

        <div className="flex-1">
          {/*for spacing */}
        </div>

        <div className="flex-1">
          {/*for spacing */}
        </div>
      </div>
      
        
      
    </>
  );
};
