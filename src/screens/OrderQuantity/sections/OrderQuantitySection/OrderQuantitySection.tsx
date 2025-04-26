import { CalendarIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../../../../components/ui/select";

export const OrderQuantitySection = (): JSX.Element => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});
  const [selectedDates, setSelectedDates] = useState<{ [key: string]: Date | null }>({});
  const datePickerRefs = useRef<{ [key: string]: any }>({});

  const handleInputChange = (id: string, val: string) => {
    setInputValues((prev) => ({ ...prev, [id]: val }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [id]: value === "none" ? "" : value,
    }));
  };

  const handleSelectFocusChange = (id: string, isOpen: boolean) => {
    setFocusedSelects((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  const handleDateChange = (id: string, date: Date | null) => {
    setSelectedDates((prev) => ({
      ...prev,
      [id]: date,
    }));
  };

  const topRowFields = [
    {
      id: "styleNumber",
      label: "Style Number*",
      type: "select",
      options: [
        { value: "style1", label: "Style 1" },
        { value: "style2", label: "Style 2" },
      ],
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
      options: [
        { value: "5%", label: "5%" },
        { value: "10%", label: "10%" },
      ],
    },
  ];

  const bottomRowFields = [
    { id: "orderNo", label: "Order No.", type: "input" },
    { id: "sizeGroup", label: "Size Group", type: "input" },
    { id: "orderQty", label: "Order qty.", type: "input" },
  ];
  
  const renderField = (field: any) => {
    if (field.type === "input") {
      return (
        <>
          <input
            id={field.id}
            name={field.id}
            type="text"
            value={inputValues[field.id] || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
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
            htmlFor={field.id}
            className={`
              absolute left-2 z-10 bg-white px-1 text-sm font-normal
              transition-all duration-200 origin-top-left
              ${
                inputValues[field.id]
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-gray-500"
              }
              peer-focus:top-[-0.4rem]
              peer-focus:scale-75
              peer-focus:text-blue-400
            `}
          >
            {field.label}
          </label>
        </>
      );
    }

    if (field.type === "select") {
      return (
        <>
          <Select
            onValueChange={(v) => handleSelectChange(field.id, v)}
            onOpenChange={(open) => handleSelectFocusChange(field.id, open)}
          >
            <SelectTrigger
              className="
                peer w-full h-[34px] text-[15px]
                px-2.5 pb-2 pt-4
                text-gray-900 bg-white rounded-md
                border border-gray-300
                focus:outline-none focus:ring-0 focus:border-blue-400
              "
            >
              <SelectValue>{selectedValues[field.id] || ""}</SelectValue>
            </SelectTrigger>
            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
              <SelectItem value="none">None (Deselect)</SelectItem>
              {field.options.map((opt: any) => (
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
                focusedSelects[field.id] || selectedValues[field.id]
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-gray-500"
              }
            `}
          >
            {field.label}
          </label>
        </>
      );
    }

    if (field.type === "date") {
      if (!datePickerRefs.current[field.id]) {
        datePickerRefs.current[field.id] = React.createRef();
      }

      return (
        <>
          <input
            type="text"
            readOnly
            value={
              selectedDates[field.id]
                ? selectedDates[field.id]!.toLocaleDateString()
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
            onClick={() => datePickerRefs.current[field.id]?.current?.setOpen(true)}
          />
          <button
            type="button"
            onClick={() => datePickerRefs.current[field.id]?.current?.setOpen(true)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
          >
            <CalendarIcon className="w-5 h-5 text-gray-500" />
          </button>
          <DatePicker
            ref={datePickerRefs.current[field.id]}
            selected={selectedDates[field.id] || null}
            onChange={(d) => handleDateChange(field.id, d)}
            customInput={<></>}
            popperPlacement="bottom-start"
            wrapperClassName="absolute z-50"
          />
          <label
            className={`
              absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
              transition-all duration-200 origin-top-left
              ${
                selectedDates[field.id]
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-gray-500"
              }
              peer-focus:top-[-0.4rem]
              peer-focus:scale-75
              peer-focus:text-blue-400
            `}
          >
            {field.label}
          </label>
        </>
      );
    }

    return null;
  };

  const renderRow = (fields: any[]) => (
    <div className="flex items-center gap-3 w-full">
      {fields.map((field) => (
        <div key={field.id} className="flex-1 relative">
          {renderField(field)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-5 w-full">
      {renderRow(topRowFields)}
      {renderRow(bottomRowFields)}
    </div>
  );
};
