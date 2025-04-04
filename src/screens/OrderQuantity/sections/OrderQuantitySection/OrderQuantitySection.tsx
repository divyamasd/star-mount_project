import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { SelectContent } from "@radix-ui/react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const OrderQuantitySection = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [selectedDates, setSelectedDates] = useState<{ [key: string]: Date | null }>({});

  const handleSelectChange = (fieldId: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldId]: value === "none" ? "" : value,
    }));
  };

  const handleDateChange = (fieldId: string, date: Date | null) => {
    setSelectedDates((prev) => ({
      ...prev,
      [fieldId]: date,
    }));
  };

  const topRowFields = [
    {
      id: "styleNumber",
      label: "Style Number*",
      type: "select",
    },
    {
      id: "deliveryDate",
      label: "Delivery Date*",
      type: "date",
    },
    {
      id: "initialDate",
      label: "Initial Date*",
      type: "date",
    },
    {
      id: "excessNumber",
      label: "Excess Number*",
      type: "select",
    },
  ];

  const bottomRowFields = [
    { id: "orderNo", label: "Order No.", type: "input" },
    { id: "sizeGroup", label: "Size Group", type: "input" },
    { id: "orderQty", label: "Order qty.", type: "input" },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-5">
      {/* Top row of fields */}
      <div className="flex items-center gap-3 w-full">
        {topRowFields.map((field) => (
          <div key={field.id} className="flex w-full items-center">
            {field.type === "select" && (
              <Select onValueChange={(value) => handleSelectChange(field.id, value)}>
                <SelectTrigger className="w-full h-12 border border-solid border-[#bbbbbb] rounded-lg px-4 py-2">
                  <div className="flex justify-between items-center w-full">
                    <SelectValue placeholder={field.label}>
                      {selectedValues[field.id] ? (
                        <span className="text-black">{selectedValues[field.id]}</span>
                      ) : (
                        <span className="text-[#bbbbbb]">{field.label}</span>
                      )}
                    </SelectValue>
                    <ChevronDownIcon className="h-[14px] w-[14px] text-[#bbbbbb]" />
                  </div>
                </SelectTrigger>
                <SelectContent
                  side="bottom"
                  align="start"
                  sideOffset={0}
                  position="popper" 
                  className="w-full bg-white border border-gray-300 shadow-lg rounded-lg z-50"
                >
                  <SelectItem value="none" className="p-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                    None (Deselect)
                  </SelectItem>
                  <SelectItem value="1" className="p-2 hover:bg-gray-100 cursor-pointer">1</SelectItem>
                  <SelectItem value="2" className="p-2 hover:bg-gray-100 cursor-pointer">2</SelectItem>
                  <SelectItem value="3" className="p-2 hover:bg-gray-100 cursor-pointer">3</SelectItem>
                </SelectContent>
              </Select>
            )}

            {field.type === "date" && (
              <div className="relative w-full">
                <input
                  type="text"
                  value={
                    selectedDates[field.id]
                      ? selectedDates[field.id]?.toLocaleDateString()
                      : ""
                  }
                  placeholder={field.label}
                  readOnly
                  className="h-12 w-full px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] text-black bg-white"
                />
                <DatePicker
                  selected={selectedDates[field.id] || null}
                  onChange={(date) => handleDateChange(field.id, date)}
                  popperPlacement="bottom-start"
                  dateFormat="PPP"
                  customInput={
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <CalendarIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                    </button>
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom row of input fields */}
      <div className="flex items-center gap-3 w-full">
        {bottomRowFields.map((field) => (
          <div key={field.id} className="w-full">
            <Input
              className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]"
              placeholder={field.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
