import { CalendarIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../../../../components/ui/input";

export const ImportSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<any>(null);

  const inputFields = [
    { id: 1, placeholder: "Import (Repeat Order)" },
    { id: 2, placeholder: "Style No." },
    { id: 3, placeholder: "Delivery Date", hasCalendarIcon: true },
    { id: 4, placeholder: "Order No." },
  ];

  return (
    <div className="flex w-full items-center gap-3">
      {inputFields.map((field) => (
        <div key={field.id} className="flex-1">
          {field.hasCalendarIcon ? (
            <div className="relative">
              {/* Styled input mimicking others */}
              <Input
                className="h-12 w-full px-4 py-2 text-base font-light text-[#bbbbbb] placeholder:text-[#bbbbbb] [font-family:'Mulish',Helvetica] border border-[#bbbbbb] rounded-lg bg-white pr-12" // <-- extra right padding for icon
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                placeholder={field.placeholder}
                readOnly
                onClick={() => datePickerRef.current?.setOpen(true)}
              />

              {/* Calendar icon absolutely positioned */}
              <button
                type="button"
                onClick={() => datePickerRef.current?.setOpen(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />
              </button>

              {/* Hidden but functional DatePicker */}
              <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={<></>}
                popperPlacement="right-start"
                wrapperClassName="absolute z-50" // Fixes placement and overlap
              />
            </div>
          ) : (
            <div className="relative">
              <Input
                className="h-12 w-full px-4 py-2 text-base font-medium text-black placeholder:text-[#bbbbbb] [font-family:'Mulish',Helvetica] border border-[#bbbbbb] rounded-lg bg-white"
                placeholder={field.placeholder}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
