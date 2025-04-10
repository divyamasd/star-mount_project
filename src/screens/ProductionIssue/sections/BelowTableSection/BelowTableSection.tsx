import { CheckIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const BelowTableSection = (): JSX.Element => {
  
  const Numbers = ["Currency 1", "Currency 2", "Currency 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 py-3">
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Quantity"
          />
        </div>
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="T. inventory Amt." />
            </SelectTrigger>
            <SelectContent>
              {Numbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Amount"
          />
        </div>
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Tax"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 py-3">
        
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Net Amount"
          />
        </div>
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Total Other Amount"
          />
        </div>
        <div className="flex-1">
          {/* for spacing */}
        </div>
        <div className="flex-1">
          {/* for spacing */}
        </div>
      </div>
      
    </>
  );
};
