import { CalendarIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../../components/ui/select";

export const StyleDetailsSection = (): JSX.Element => {
  // --- State hooks for all three input types ---
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});
  const [dateValues, setDateValues] = useState<{ [key: string]: Date | null }>({});
  const datePickerRef = useRef<any>(null);

  // --- Handlers ---
  const handleInputChange = (fieldName: string, val: string) => {
    setInputValues((prev) => ({ ...prev, [fieldName]: val }));
  };

  const handleSelectChange = (fieldName: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldName]: value === "none" ? "" : value,
    }));
  };

  const handleSelectFocusChange = (fieldName: string, isOpen: boolean) => {
    setFocusedSelects((prev) => ({
      ...prev,
      [fieldName]: isOpen,
    }));
  };

  const handleDateChange = (fieldName: string, date: Date | null) => {
    setDateValues((prev) => ({
      ...prev,
      [fieldName]: date,
    }));
  };

  // --- Define your fields; note dropdowns need an options array ---
  const formRows = [
    [
      { name: "Due Season*", hasDropdown: true,
        options: [
          { value: "summer", label: "Summer" },
          { value: "winter", label: "Winter" },
        ],
       },
      { name: "Due Month*", hasDropdown: true,
        options: [
          { value: "summer", label: "Summer" },
          { value: "winter", label: "Winter" },
        ],
       },
      { name: "Season Year*", hasCalendar: true,
        options: [
          { value: "summer", label: "Summer" },
          { value: "winter", label: "Winter" },
        ],
       },
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
      { name: "Ship Mode*", hasDropdown: true,
        options: [
        { value: "summer", label: "Summer" },
        { value: "winter", label: "Winter" },
      ], },
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
      {formRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center gap-3 w-full">
          {row.map((field) => (
            <div key={field.name} className="flex-1 relative">
              {/* --- TEXT INPUT --- */}
              {!field.hasDropdown && !field.hasCalendar && (
                <>
                  <input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={inputValues[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder=" "
                    className="
                      peer block w-full h-[34px] text-[15px]
                      px-2.5 pt-4 pb-2
                      text-gray-900 bg-white rounded-md
                      border border-gray-300
                      focus:outline-none focus:ring-0 focus:border-blue-400
                      placeholder-transparent
                    "
                  />
                  <label
                    htmlFor={field.name}
                    className={`
                      absolute left-2 z-10 bg-white px-1 text-sm font-normal
                      transition-all duration-200 origin-top-left
                      ${
                        inputValues[field.name]
                          ? "top-[-0.4rem] scale-75 text-blue-400"
                          : "top-[0.65rem] scale-100 text-gray-500"
                      }
                      peer-focus:top-[-0.4rem]
                      peer-focus:scale-75
                      peer-focus:text-blue-400
                    `}
                    style={{ transformOrigin: "top left" }}
                  >
                    {field.name}
                  </label>
                </>
              )}

              {/* --- SELECT DROPDOWN --- */}
              {field.hasDropdown && (
                <>
                  <Select
                    onValueChange={(v) => handleSelectChange(field.name, v)}
                    onOpenChange={(open) => handleSelectFocusChange(field.name, open)}
                  >
                    <SelectTrigger className="
                      peer w-full h-[34px] text-[15px]
                      px-2.5 pb-2 pt-4
                      text-gray-900 bg-white rounded-md
                      border border-gray-300
                      focus:outline-none focus:ring-0 focus:border-blue-400
                    ">
                      <SelectValue>
                        {selectedValues[field.name] || ""}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
                      <SelectItem value="none">None (Deselect)</SelectItem>
                      {field.options!.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <label
                    className={`
                      absolute left-2 z-10 bg-white px-1 text-sm font-normal
                      transition-all duration-200 origin-top-left
                      ${
                        focusedSelects[field.name] || selectedValues[field.name]
                          ? "top-[-0.4rem] scale-75 text-blue-400"
                          : "top-[0.65rem] scale-100 text-gray-500"
                      }
                    `}
                    style={{ transformOrigin: "top left" }}
                  >
                    {field.name}
                  </label>
                </>
              )}

              {/* --- DATE PICKER --- */}
              {field.hasCalendar && (
                <>
                  <input
                    type="text"
                    readOnly
                    value={
                      dateValues[field.name]
                        ? dateValues[field.name]!.toLocaleDateString()
                        : ""
                    }
                    placeholder=" "
                    className="
                      peer block w-full h-[34px] text-[15px]
                      px-2.5 pb-1.5 pt-2
                      text-gray-900 bg-white rounded-md
                      border border-gray-300
                      focus:outline-none focus:ring-0 focus:border-blue-400
                      placeholder-transparent
                    "
                    onClick={() => datePickerRef.current?.setOpen(true)}
                  />
                  <button
                    type="button"
                    onClick={() => datePickerRef.current?.setOpen(true)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2"
                  >
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                  </button>
                  <DatePicker
                    ref={datePickerRef}
                    selected={dateValues[field.name] || null}
                    onChange={(d) => handleDateChange(field.name, d)}
                    customInput={<></>}
                    popperPlacement="bottom-start"
                    wrapperClassName="absolute z-50"
                  />
                  <label
                    className={`
                      absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
                      transition-all duration-200 origin-top-left
                      ${
                        dateValues[field.name]
                          ? "top-[-0.4rem] scale-75 text-blue-400"
                          : "top-[0.65rem] scale-100 text-gray-500"
                      }
                      peer-focus:top-[-0.4rem]
                      peer-focus:scale-75
                      peer-focus:text-blue-400
                    `}
                    style={{ transformOrigin: "top left" }}
                  >
                    {field.name}
                  </label>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


