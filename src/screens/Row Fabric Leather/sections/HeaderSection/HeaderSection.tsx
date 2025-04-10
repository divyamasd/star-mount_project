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



export const HeaderSection = (): JSX.Element => {

  const buyerNames = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const purchaseNames = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const oNumbers = ["Order 1", "Order 2", "Order 3"];
  const quantityNumbers = [" 1", " 2", " 3"];
  const uomNumbers = ["1", " 2", " 3"];
  const fabricTypes = ["Type 1",  "Type 2", "Type 3"];
  const prices = ["Type 1",  "Type 2", "Type 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Buyer Name" />
            </SelectTrigger>
            <SelectContent>
              {buyerNames.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Order No." />
            </SelectTrigger>
            <SelectContent>
              {oNumbers.map((company) => (
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
            placeholder="Style No."
          />
        </div>
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Fabric Type" />
            </SelectTrigger>
            <SelectContent>
              {fabricTypes.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Fabric" />
            </SelectTrigger>
            <SelectContent>
              {fabricTypes.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              {quantityNumbers.map((vendor) => (
                <SelectItem key={vendor} value={vendor}>
                  {vendor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="UOM" />
            </SelectTrigger>
            <SelectContent>
              {uomNumbers.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              {prices.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <Input
            className="h-12 w-full border border-[#bbbbbb] px-4 py-2 font-mulish-14-sp-medium text-base font-medium text-[#505050] placeholder-[#bbbbbb]"
            placeholder="Discount"
          />
        </div>

        <div className="flex-1">
          <Select>
            <SelectTrigger className="h-12 w-full border border-[#bbbbbb] bg-transparent">
              <SelectValue placeholder="Purchase Name" />
            </SelectTrigger>
            <SelectContent>
              {purchaseNames.map((order) => (
                <SelectItem key={order} value={order}>
                  {order}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
