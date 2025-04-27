import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../../../components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const OrderDetailsSection = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [dateValues, setDateValues] = useState<{ [key: string]: Date | null }>({});
  const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleSelectChange = (fieldName: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldName]: value === "none" ? "" : value,
    }));
  };

  const handleSelectFocusChange = (fieldName: string, isFocused: boolean) => {
    setFocusedSelects((prev) => ({
      ...prev,
      [fieldName]: isFocused,
    }));
  };

  const handleDateChange = (fieldName: string, date: Date | null) => {
    setDateValues((prev) => ({
      ...prev,
      [fieldName]: date,
    }));
  };

  const formRows = [
    [
      {
        name: "buyerStyleNumber",
        label: "Buyer Style Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
        options: [
          { value: "style1", label: "Style 1" },
          { value: "style2", label: "Style 2" },
        ],
      },
      {
        name: "buyerOrderNumber",
        label: "Buyer Order Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
        options: [
          { value: "order1", label: "Order 1" },
          { value: "order2", label: "Order 2" },
        ],
      },
      {
        name: "buyerDelDate",
        label: "Buyer Del Date*",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
      {
        name: "orderDate",
        label: "Order Date*",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
    ],
    [
      { name: "company", label: "Company", type: "text" },
      { name: "deliveryTerms", label: "Delivery Terms", type: "text" },
      { name: "fabricPurchase", label: "Fabric Purchase", type: "text" },
      { name: "oldOrder", label: "Old Order", type: "text" },
    ],
    [
      { name: "merchandiser", label: "Merchandiser*", type: "text" },
      {
        name: "cancelDate",
        label: "Cancel Date",
        type: "date",
        icon: <CalendarIcon className="h-5 w-5 text-[#bbbbbb]" />,
      },
      { name: "orderQty", label: "Order qty.", type: "text" },
      { name: "enteredQty", label: "Entered qty.", type: "text" },
    ],
    [
      { name: "bookedGerige", label: "Booked Gerige", type: "text" },
      { name: "remarks", label: "Remarks", type: "text", span: 2 },
      { name: "buyerDept", label: "Buyer Dept.", type: "text" },
    ],
  ];

  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <div className="relative w-full">
            <Select
              onValueChange={(value) => handleSelectChange(field.name, value)}
              onOpenChange={(open) => handleSelectFocusChange(field.name, open)}
            >
              <SelectTrigger className="w-full px-2.5 pb-2 pt-4 h-[34px] text-[15px] text-gray-900 bg-white rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer placeholder:text-sm">
                <SelectValue placeholder="">
                  {selectedValues[field.name] ? (
                    <span className="text-black">{selectedValues[field.name]}</span>
                  ) : (
                    <span className="text-[#bbbbbb]">{field.label}</span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent
                side="bottom"
                align="start"
                sideOffset={0}
                position="popper"
                className="w-full bg-white border border-gray-300 shadow-lg rounded-lg z-50"
              >
                <SelectItem
                  value="none"
                  className="p-2 text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                  None (Deselect)
                </SelectItem>
                {(field.options || []).map((option: any) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <label
              className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200
                ${focusedSelects[field.name] || selectedValues[field.name]
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-black"
                }`}
              style={{
                transformOrigin: "top left",
                lineHeight: "1",
                height: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {field.label}
            </label>
          </div>
        );

        case "date":
          return (
            <div className="relative w-full">
              {/* Text Input Displaying the Date */}
              <input
                type="text"
                value={dateValues[field.name] ? dateValues[field.name]?.toLocaleDateString() : ""}
                readOnly
                placeholder={field.label}
                className="
                  w-full h-[34px] text-[15px]
                  px-2.5 pb-1.5 pt-2
                  text-gray-900 bg-white rounded-md
                  border border-gray-300 appearance-none
                  focus:outline-none focus:ring-0 focus:border-gray-600
                  peer placeholder:text-sm
                "
              />
        
              {/* Floating Label */}
              <label
                className={`
                  absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
                  transition-all duration-200 origin-[0]
                  ${dateValues[field.name]
                    ? "top-[-0.4rem] scale-75 text-blue-400"
                    : "top-[0.65rem] scale-100 text-black"}
                `}
                style={{ transformOrigin: "top left" }}
              >
                {field.label}
              </label>
        
              {/* Date Picker Calendar Icon (as custom input) */}
              <DatePicker
                selected={dateValues[field.name] || null}
                onChange={(date) => handleDateChange(field.name, date)}
                popperPlacement="right-start"
                dateFormat="PPP"
                customInput={
                  <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <CalendarIcon className="w-5 h-5 pb-1 text-gray-500 cursor-pointer" />
                  </button>
                }
              />
            </div>
          );
        
      default:
        return (
          <div key={field.id} className="relative w-full">
            <input
              id={field.name}
              name={field.name}
              type="text"
              value={inputValues[field.name] || ""}  // <-- Unique per field
              onChange={(e) =>
                setInputValues((prev) => ({
                  ...prev,
                  [field.name]: e.target.value,  // <-- Update only this field's value
                }))
              }
              placeholder=" "
              className={`
                peer block w-full h-[34px] text-[15px]
                px-2.5 pt-4 pb-2
                text-gray-900 bg-white rounded-md
                border border-gray-300 appearance-none
                focus:outline-none focus:ring-0 focus:border-gray-600
                placeholder-transparent
              `}
            />

            <label
              htmlFor={field.name}
              className={`
                absolute left-2 z-10 bg-white px-1 text-sm font-normal
                transition-all duration-200
                ${
                  inputValues[field.name]
                    ? "top-[-0.4rem] scale-75 text-blue-400"
                    : "top-[0.65rem] scale-100 text-black"
                }
                peer-focus:top-[-0.4rem]
                peer-focus:scale-75
                peer-focus:text-blue-400
              `}
              style={{
                transformOrigin: "top left",
                lineHeight: "1",
                height: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {field.label}
            </label>
          </div>
        );
    }
  };

  return (
    <section className="flex flex-col w-full gap-5">
      {formRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex items-center gap-3 w-full">
          {row.map((field, fieldIndex) => (
            <div
              key={`field-${rowIndex}-${fieldIndex}`}
              className={`flex items-center ${field.span === 2 ? "w-1/2" : "w-1/4"}`}
            >
              {renderField(field)}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
