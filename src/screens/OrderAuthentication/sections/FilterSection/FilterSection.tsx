import { CalendarIcon, CheckIcon } from "lucide-react";
import React, { useState, forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

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

export const FilterSection = (): JSX.Element => {
  // State variables
  const [orderFrom, setOrderFrom] = useState("");
  const [orderTo, setOrderTo] = useState("");
  const [orderDate, setOrderDate] = useState<Date | null>(null);
  const [buyerName, setBuyerName] = useState("");
  const [styleNumber, setStyleNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [toBeVerified, setToBeVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);

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
    <div className="flex flex-col gap-3 w-full mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Style Number */}
        <div className="w-[331px]">
          <Select value={orderFrom} onValueChange={setOrderFrom}>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Order From" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="style1">Place 1</SelectItem>
              <SelectItem value="style2">Place 2</SelectItem>
              <SelectItem value="style3">Place 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Order Number */}
        <div className="w-[331px]">
          <Select value={orderTo} onValueChange={setOrderTo}>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Order To Date" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="order1">Order 1</SelectItem>
              <SelectItem value="order2">Order 2</SelectItem>
              <SelectItem value="order3">Order 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Initial Date */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={orderDate}
            setSelectedDate={setOrderDate}
            placeholder="Order Date*"
            id="orderDatePicker"
          />
        </div>

        {/*Toggle */}
        <div className="flex items-center gap-[53px] mt-[2px]">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={() => setToBeVerified(!toBeVerified)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                  toBeVerified ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                }`}
              >
                {toBeVerified && <CheckIcon className="h-3 w-3 text-white" />}
              </div>
            </div>
            <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
              To be Verify
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[53px] mt-[2px]">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={() => setAlreadyVerified(!alreadyVerified)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                  alreadyVerified ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                }`}
              >
                {alreadyVerified && <CheckIcon className="h-3 w-3 text-white" />}
              </div>
            </div>
            <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
              Already
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Buyer Name */}
        <div className="w-[331px]">
          <Select value={buyerName} onValueChange={setBuyerName}>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Buyer Name*" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buyer1">Buyer 1</SelectItem>
              <SelectItem value="buyer2">Buyer 2</SelectItem>
              <SelectItem value="buyer3">Buyer 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Order Type */}
        <div className="w-[331px]">
          <Select value={styleNumber} onValueChange={setStyleNumber}>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Style Number*" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bulk">Bulk</SelectItem>
              <SelectItem value="sample">Sample</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[331px]">
          <Select value={orderNumber} onValueChange={setOrderNumber}>
            <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4">
              <div className="flex items-center justify-between w-full">
                <SelectValue placeholder="Order Type*" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bulk">Bulk</SelectItem>
              <SelectItem value="sample">Sample</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
