import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../../../components/ui/select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const OrderDetailsSection = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [dateValues, setDateValues] = useState<{ [key: string]: Date | null }>({});
  const handleSelectChange = (fieldId:any, value:any) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldId]: value === "none" ? "" : value, // Reset to placeholder when "None" is selected
    }));
  };
  const handleDateChange = (fieldId: string, date: Date | null) => {
    setDateValues((prev) => ({
      ...prev,
      [fieldId]: date,
    }));
  };

  // Form field data for mapping
  const formRows = [
    [
      {
        name: "buyerStyleNumber",
        label: "Buyer Style Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
      },
      {
        name: "buyerOrderNumber",
        label: "Buyer Order Number*",
        type: "select",
        icon: <ChevronDownIcon className="h-4 w-4 text-[#bbbbbb]" />,
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

  // Render form field based on type
  const renderField = (field: any) => {
    switch (field.type) {
      case "select":
        return (
          <Select onValueChange={(value) => handleSelectChange(field.name, value)}>
            <SelectTrigger className="w-full h-12 px-4 py-2 rounded-lg border border-[#bbbbbb] focus:ring-0 focus:ring-offset-0 flex items-center justify-between">
              <span className="font-light text-black text-base">
                {selectedValues[field.name] || field.label}
              </span>
              
            </SelectTrigger>
            <SelectContent>
              {(field.options || []).map((option: any) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "date":
        return (
          <div className="relative w-full">
            {/* Read-only input field styled like others */}
            <input
              type="text"
              value={dateValues[field.name] ? dateValues[field.name]?.toLocaleDateString() : ""}
              placeholder={field.label}
              readOnly
              className="h-12 w-full px-4 py-2 pr-12 rounded-lg border border-solid border-[#bbbbbb] text-black font-light text-base bg-white"
            />

            {/* DatePicker triggered by the icon button */}
            <DatePicker
              selected={dateValues[field.name] || null}
              onChange={(date) => handleDateChange(field.name, date)}
              popperPlacement="bottom-end"
              dateFormat="PPP"
              customInput={
                <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <CalendarIcon className="w-5 h-5 text-black cursor-pointer" />
                </button>
              }
            />
          </div>
        );
      default:
        return (
          <Input
            className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] w-full font-light text-black text-base font-['Mulish',Helvetica]"
            placeholder={field.label}
          />
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
