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
  const [copyItem, setCopyItem] = useState(false);
  

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Style Number"
          />
        </div>
        <div className="flex-1">
         <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Order Number"
          />
        </div>

        <div className="flex-1">
         <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Buyer"
          />
        </div>
        <div className="flex-1">
         <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Location"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <div className="flex items-center gap-[53px] mt-[2px]">
                     <div
                       className="flex items-center gap-1.5 cursor-pointer"
                       onClick={() => setCopyItem(!copyItem)}
                     >
                       <div className="relative w-6 h-6">
                         <div
                           className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                             copyItem ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                           }`}
                         >
                           {copyItem && <CheckIcon className="h-3 w-3 text-white" />}
                         </div>
                       </div>
                       <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                         Copy Single Item
                       </div>
                     </div>
                   </div>
        </div>
        <div className="flex-1">
        
        </div>

        <div className="flex-1">
        
        </div>
        <div className="flex-1">
         <div className="flex justify-end">
           <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
             Show
           </Button>
         </div>
        </div>
      </div>

     
      
    </>
  );
};
