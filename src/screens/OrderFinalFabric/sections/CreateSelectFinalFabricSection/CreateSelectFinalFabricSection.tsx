import React, { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const CreateSelectFinalFabricSection = (): JSX.Element => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});

  const [itemGroup, setItemGroup] = useState("");
  const [itemSubGroup, setItemSubGroup] = useState("");

  // Mock data for dropdowns
  const itemGroups = ["Group A", "Group B", "Group C"];
  const itemSubGroups = ["Sub A", "Sub B", "Sub C"];

  // Define data for input fields
  const inputFields = [
    { id: 1, label: "Content" },
    { id: 2, label: "Count" },
    { id: 3, label: "Construction" },
    { id: 4, label: "Width" },
    { id: 5, label: "Thickness" },
    { id: 6, label: "GSM" },
    { id: 7, label: "Fabric Colour" },
    { id: 8, label: "Print" },
    { id: 9, label: "Price Per Unit" },
    { id: 10, label: "Item Quantity" },
  ];

  // Handle input change
  const handleInputChange = (fieldName: string, val: string) => {
    setInputValues((prev) => ({ ...prev, [fieldName]: val }));
  };

  // Handle select change
  const handleSelectChange = (fieldName: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldName]: value === "none" ? "" : value,
    }));
  };

  // Handle select focus change
  const handleSelectFocusChange = (fieldName: string, isOpen: boolean) => {
    setFocusedSelects((prev) => ({
      ...prev,
      [fieldName]: isOpen,
    }));
  };

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards mx-10">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="relative h-[49px]">
          <Select onValueChange={(v) => handleSelectChange("itemGroup", v)}>
            <SelectTrigger
              className="peer w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400"
            >
              <SelectValue>{selectedValues.itemGroup || "Item Group"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
              {itemGroups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label
            className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
              selectedValues.itemGroup
                ? "top-[-0.4rem] scale-75 text-blue-400"
                : "top-[0.65rem] scale-100 text-gray-500"
            }`}
            style={{ transformOrigin: "top left" }}
          >
            Item Group
          </label>
        </div>

        <div className="relative h-[49px]">
          <Select onValueChange={(v) => handleSelectChange("itemSubGroup", v)}>
            <SelectTrigger
              className="peer w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400"
            >
              <SelectValue>{selectedValues.itemSubGroup || "Item Sub Group"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
              {itemSubGroups.map((subGroup) => (
                <SelectItem key={subGroup} value={subGroup}>
                  {subGroup}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label
            className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
              selectedValues.itemSubGroup
                ? "top-[-0.4rem] scale-75 text-blue-400"
                : "top-[0.65rem] scale-100 text-gray-500"
            }`}
            style={{ transformOrigin: "top left" }}
          >
            Item Sub Group
          </label>
        </div>

        {inputFields.map((field) => (
          <div key={field.id} className="relative h-[49px]">
            <input
              type="text"
              value={inputValues[field.label] || ""}
              onChange={(e) => handleInputChange(field.label, e.target.value)}
              placeholder=" "
              className="peer block w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 placeholder-transparent"
            />
            <label
              htmlFor={field.label}
              className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
                inputValues[field.label] ? "top-[-0.4rem] scale-75 text-blue-400" : "top-[0.65rem] scale-100 text-gray-500"
              }`}
              style={{ transformOrigin: "top left" }}
            >
              {field.label}
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* First Input Field */}
          <div className="relative h-[49px]">
            <input
              type="text"
              value={inputValues.remarks1 || ""}
              onChange={(e) => handleInputChange("remarks1", e.target.value)}
              placeholder=" "
              className="peer block w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 placeholder-transparent"
            />
            <label
              htmlFor="remarks1"
              className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
                inputValues.remarks1
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-gray-500"
              }`}
              style={{ transformOrigin: "top left" }}
            >
              Remarks 1
            </label>
          </div>

          {/* Second Input Field */}
          <div className="relative h-[49px]">
            <input
              type="text"
              value={inputValues.remarks2 || ""}
              onChange={(e) => handleInputChange("remarks2", e.target.value)}
              placeholder=" "
              className="peer block w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 placeholder-transparent"
            />
            <label
              htmlFor="remarks2"
              className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
                inputValues.remarks2
                  ? "top-[-0.4rem] scale-75 text-blue-400"
                  : "top-[0.65rem] scale-100 text-gray-500"
              }`}
              style={{ transformOrigin: "top left" }}
            >
              Remarks 2
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};
