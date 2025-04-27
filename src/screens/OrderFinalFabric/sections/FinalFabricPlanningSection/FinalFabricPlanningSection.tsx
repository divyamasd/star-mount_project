import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";

export const FinalFabricPlanningSection = (): JSX.Element => {
  // State hooks for select values and input fields
  const [orderNumber, setOrderNumber] = useState("");
  const [styleNumber, setStyleNumber] = useState("");
  const [fabricDescription, setFabricDescription] = useState("");

  // Mock data for dropdowns
  const orderNumbers = ["ORD001", "ORD002", "ORD003"];
  const styleNumbers = ["STY001", "STY002", "STY003"];

  return (
    <section className="flex flex-col w-full px-10 py-4 gap-4">
      <div className="flex w-full items-center gap-3">
        {/* Order Number Dropdown */}
        <div className="relative flex-1 h-[49px]">
          <Select onValueChange={setOrderNumber}>
            <SelectTrigger className="peer w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400">
              <SelectValue placeholder="Order Number*" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
              {orderNumbers.map((number) => (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label
            htmlFor="orderNumber"
            className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
              orderNumber ? "top-[-0.4rem] scale-75 text-blue-400" : "top-[0.65rem] scale-100 text-gray-500"
            }`}
            style={{ transformOrigin: "top left" }}
          >
            Order Number
          </label>
        </div>

        {/* Style Number Dropdown */}
        <div className="relative flex-1 h-[49px]">
          <Select onValueChange={setStyleNumber}>
            <SelectTrigger className="peer w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400">
              <SelectValue placeholder="Style Number*" />
            </SelectTrigger>
            <SelectContent className="w-full bg-white border border-gray-300 shadow rounded mt-1 z-50">
              {styleNumbers.map((number) => (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label
            htmlFor="styleNumber"
            className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
              styleNumber ? "top-[-0.4rem] scale-75 text-blue-400" : "top-[0.65rem] scale-100 text-gray-500"
            }`}
            style={{ transformOrigin: "top left" }}
          >
            Style Number
          </label>
        </div>

        {/* Fabric Description Input Field */}
        <div className="relative flex-1 h-[49px]">
          <input
            type="text"
            value={fabricDescription}
            onChange={(e) => setFabricDescription(e.target.value)}
            placeholder=" "
            className="peer block w-full h-[34px] text-[15px] px-2.5 pt-4 pb-2 text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 placeholder-transparent"
          />
          <label
            htmlFor="fabricDescription"
            className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200 origin-top-left ${
              fabricDescription ? "top-[-0.4rem] scale-75 text-blue-400" : "top-[0.65rem] scale-100 text-gray-500"
            }`}
            style={{ transformOrigin: "top left" }}
          >
            Fabric Description
          </label>
        </div>
      </div>
    </section>
  );
};
