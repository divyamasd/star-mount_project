import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";



export const SelectInput = ({
    name,
    options,
    placeholder,
    id,
  }: {
    name: string;
    options: string[];
    placeholder: string;
    id: string;
  }): JSX.Element => {
    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
    const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});
  
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
  
    return (
      <div className="relative w-full">
        
  
                          <Select
                            onValueChange={(v) => handleSelectChange(name, v)}
                            onOpenChange={(open) => handleSelectFocusChange(name, open)}
                          >
                            <SelectTrigger className="
                              peer w-full h-[34px] text-[15px]
                              px-2.5 pb-2 pt-4
                              text-gray-900 bg-white rounded-md
                              border border-gray-300
                              focus:outline-none focus:ring-0 focus:border-blue-400
                            ">
                              <SelectValue>
                                {selectedValues[name] || ""}
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
                              <SelectItem value="none">None (Deselect)</SelectItem>
                              {options!.map((opt:any) => (
                                <SelectItem key={opt} value={opt}>
                                  {opt}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <label
                            className={`
                              absolute left-2 z-10 bg-white px-1 text-sm font-normal
                              transition-all duration-200 origin-top-left
                              ${
                                focusedSelects[name] || selectedValues[name]
                                  ? "top-[-0.4rem] scale-75 text-blue-400"
                                  : "top-[0.65rem] scale-100 text-gray-500"
                              }
                            `}
                            style={{ transformOrigin: "top left" }}
                          >
                            {placeholder}
                          </label>
      </div>
    );
  };