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
  const [orderNumber, setOrderNumber] = useState("");
  const [styleNumber, setStyleNumber] = useState("");

  // Mock data for dropdowns
  const orderNumbers = ["ORD001", "ORD002", "ORD003"];
  const styleNumbers = ["STY001", "STY002", "STY003"];

  return (
    <section className="flex flex-col w-full px-10 py-4 gap-4">
      <div className="flex w-full items-center gap-3">
        <div className="flex-1">
          <Select onValueChange={setOrderNumber}>
            <SelectTrigger className="w-full h-12 border-[#bbbbbb] font-['Mulish',Helvetica] text-black">
              <SelectValue placeholder="Order Number*" />
            </SelectTrigger>
            <SelectContent>
              {orderNumbers.map((number) => (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select onValueChange={setStyleNumber}>
            <SelectTrigger className="w-full h-12 border-[#bbbbbb] font-['Mulish',Helvetica] text-black">
              <SelectValue placeholder="Style Number*" />
            </SelectTrigger>
            <SelectContent>
              {styleNumbers.map((number) => (
                <SelectItem key={number} value={number}>
                  {number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Input
            className="w-full h-12 border-[#bbbbbb] font-['Mulish',Helvetica] text-black"
            placeholder="Fabric Description"
          />
        </div>
      </div>
    </section>
  );
};
