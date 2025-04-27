import { CalendarIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ImportSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<any>(null);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const inputFields = [
    { id: 1, label: "Import (Repeat Order)", type: "text", name: "import" },
    { id: 2, label: "Style No.", type: "text", name: "style" },
    { id: 3, label: "Delivery Date", type: "date", name: "delivery" },
    { id: 4, label: "Order No.", type: "text", name: "order" },
  ];

  const handleInputChange = (name: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-full items-center gap-3">
      {inputFields.map((field) => (
        <div key={field.id} className="relative flex-1">
          {field.type === "date" ? (
            <>
              {/* Date input field with floating label */}
              <input
                type="text"
                readOnly
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                placeholder={field.label}
                className="
                  w-full h-[34px] text-[15px]
                  px-2.5 pb-1.5 pt-2
                  text-gray-900 bg-white rounded-md
                  border border-gray-300 appearance-none
                  focus:outline-none focus:ring-0 focus:border-gray-600
                  peer placeholder:text-sm
                "
                onClick={() => datePickerRef.current?.setOpen(true)}
              />

              <label
                className={`
                  absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
                  transition-all duration-200 origin-[0]
                  ${selectedDate
                    ? "top-[-0.4rem] scale-75 text-blue-400"
                    : "top-[0.65rem] scale-100 text-black"}
                `}
                style={{ transformOrigin: "top left" }}
              >
                {field.label}
              </label>

              <button
                type="button"
                onClick={() => datePickerRef.current?.setOpen(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <CalendarIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
              </button>

              <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={<></>}
                popperPlacement="right-start"
                wrapperClassName="absolute z-50"
                dateFormat="PPP"
              />
            </>
          ) : (
            <>
              {/* Text input field with floating label */}
              <input
                type="text"
                value={inputValues[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.label}
                className="
                  peer block w-full h-[34px] text-[15px]
                  px-2.5 pt-4 pb-2
                  text-gray-900 bg-white rounded-md
                  border border-gray-300 appearance-none
                  focus:outline-none focus:ring-0 focus:border-gray-600
                  placeholder-transparent
                "
              />

              <label
                className={`
                  absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
                  transition-all duration-200 origin-[0]
                  ${inputValues[field.name]
                    ? "top-[-0.4rem] scale-75 text-blue-400"
                    : "top-[0.65rem] scale-100 text-black"}
                `}
                style={{ transformOrigin: "top left" }}
              >
                {field.label}
              </label>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
