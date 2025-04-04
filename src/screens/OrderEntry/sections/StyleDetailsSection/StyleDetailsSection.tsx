import { CalendarIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../../components/ui/select";

export const StyleDetailsSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<any>(null);

  const formFields = [
    [
      { name: "Due Season*", hasDropdown: true },
      { name: "Due Month*", hasDropdown: true },
      { name: "Season Year*", hasCalendar: true },
      { name: "Category Desc*", hasDropdown: false },
    ],
    [
      { name: "Currency*", hasDropdown: false },
      { name: "Agent", hasDropdown: false },
      { name: "Customer", hasDropdown: false },
      { name: "Article No.", hasDropdown: false },
    ],
    [
      { name: "Q/A Name", hasDropdown: false },
      { name: "Description", hasDropdown: false },
      { name: "Pay Terms", hasDropdown: false },
      { name: "Ship Mode*", hasDropdown: true },
    ],
    [
      { name: "Locations", hasDropdown: false },
      { name: "Temple Node", hasDropdown: false },
      { name: "Size Group*", hasDropdown: false },
      { name: "Style Group", hasDropdown: false },
    ],
    [
      { name: "Style Desc", hasDropdown: false },
      { name: "Order Desc", hasDropdown: false },
      { name: "Rate*", hasDropdown: false },
      { name: "Repeat", hasDropdown: false },
    ],
  ];

  return (
    <div className="flex flex-col w-full gap-5">
      {formFields.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3 w-full">
          {row.map((field, fieldIndex) => (
            <div key={`field-${rowIndex}-${fieldIndex}`} className="flex-1">
              {field.hasDropdown ? (
                <Select>
                  <SelectTrigger className="h-12 w-full font-mulish-14-sp-medium text-black placeholder:text-[#bbbbbb] border border-[#bbbbbb] rounded-lg px-4">
                    <SelectValue placeholder={field.name} />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-white border border-gray-300 shadow-lg rounded-lg mt-1 z-50">
                    <SelectItem value="none" className="p-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                      None (Deselect)
                    </SelectItem>
                    <SelectItem value="1" className="p-2 hover:bg-gray-100 cursor-pointer">1</SelectItem>
                    <SelectItem value="2" className="p-2 hover:bg-gray-100 cursor-pointer">2</SelectItem>
                    <SelectItem value="3" className="p-2 hover:bg-gray-100 cursor-pointer">3</SelectItem>
                  </SelectContent>
                </Select>
              ) : field.hasCalendar ? (
                <div className="relative w-full">
                  <Input
                    className="h-12 w-full font-mulish-14-sp-medium text-black placeholder:text-[#bbbbbb] pl-4 pr-12 border border-[#bbbbbb] rounded-lg"
                    value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                    placeholder={field.name}
                    readOnly
                    onClick={() => datePickerRef.current?.setOpen(true)}
                  />
                  <button
                    type="button"
                    onClick={() => datePickerRef.current?.setOpen(true)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CalendarIcon className="w-5 h-5 text-[#bbbbbb]" />
                  </button>
                  <DatePicker
                    ref={datePickerRef}
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    customInput={<></>}
                    popperPlacement="bottom-start"
                    wrapperClassName="absolute z-50"
                  />
                </div>
              ) : (
                <Input
                  className="h-12 w-full font-mulish-14-sp-medium text-black placeholder:text-[#bbbbbb] border border-[#bbbbbb] rounded-lg px-4"
                  placeholder={field.name}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};