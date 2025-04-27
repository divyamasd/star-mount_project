import {  CheckIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";


export const HeaderSection = (): JSX.Element => {
  const [Date, setDate] = useState<Date | null>(null);
  const [billingAt, setBillingAt] = useState<Date | null>(null);
  const [receiving, setReceiving] = useState(false);
  const [inspection, setInspection] = useState(false);
  
  const companyNames = ["Company 1", "Company 2", "Company 3"];
  const receiverNumbers = ["Order 1", "Order 2", "Order 3"];
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const weayNumbers = ["1", " 2", " 3"];
  const invoiceNumbers = ["1", " 2", " 3"];
  const styleNumbers = ["1", " 2", " 3"];
  const poNumbers = ["1", " 2", " 3"];
  const billNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "company name"
            options={companyNames}
            placeholder = "Company name"
            id = "company name"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "receiver number"
            options={receiverNumbers}
            placeholder = "Receiver number"
            id = "receiver number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Date"
            id="DatePicker"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "vendor"
            options={vendorNumbers}
            placeholder = "Vendor"
            id = "vendor"
          />
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "receiving invoice"
            options={invoiceNumbers}
            placeholder = "Receiving invoice"
            id = "receiving invoice"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "weay"
            options={weayNumbers}
            placeholder = "Weay"
            id = "weay"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "style number"
            options={styleNumbers}
            placeholder = "Style number"
            id = "style number"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "po number"
            options={poNumbers}
            placeholder = "PO number"
            id = "po number"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
            name = "item sub group"
            placeholder = "Item sub group"
            id = "item sub group"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "bill number"
            options={billNumbers}
            placeholder = "Bill number"
            id = "bill number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={billingAt}
            setSelectedDate={setBillingAt}
            placeholder="Bill Date"
            id="billDatePicker"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "location"
            placeholder = "Location"
            id = "location"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
            name = "length"
            placeholder = "Length"
            id = "length"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "width"
            placeholder = "Width"
            id = "width"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "rcv store"
            placeholder = "RCV store"
            id = "rcv store"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name = "rcv bin"
            placeholder = "RCV bin"
            id = "rcv bin"
          />
        </div>
      </div>
      
        <div className="px-10 py-6 flex gap-2">
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setReceiving(!receiving)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    receiving ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {receiving && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Receiving
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setInspection(!inspection)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    inspection ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {inspection && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Inspection
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
