import { CheckIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";



export const HeaderSection = (): JSX.Element => {
  const [Date, setDate] = useState<Date | null>(null);
  const [toBeVerified, setToBeVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  
  const companyNames = ["Company 1", "Company 2", "Company 3"];
  const receiverNumbers = ["Order 1", "Order 2", "Order 3"];
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const weayNumbers = ["1", " 2", " 3"];
  const invoiceNumbers = ["1", " 2", " 3"];
  const inspectionNumbers = ["1", " 2", " 3"];
  const gateNumbers = ["1", " 2", " 3"];
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
            name = "eway number"
            options={weayNumbers}
            placeholder = "Eway number"
            id = "eway number"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "inspection number"
            options={inspectionNumbers}
            placeholder = "Inspection number"
            id = "inspection number"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "gate number"
            options={gateNumbers}
            placeholder = "Gate number"
            id = "gate number"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
            name = "location"
            placeholder = "Location"
            id = "location"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "style number"
            options={invoiceNumbers}
            placeholder = "Style number"
            id = "style number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "po number"
            options={invoiceNumbers}
            placeholder = "PO number"
            id = "po number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "item sub group"
            options={invoiceNumbers}
            placeholder = "Item sub group"
            id = "item sub group"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name = "receive number"
            placeholder = "Receive number"
            id = "receive number"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "insp store"
            placeholder = "Insp. store"
            id = "insp store"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "insp bin"
            placeholder = "Insp. bin"
            id = "insp bin"
          />
        </div>

        <div className="flex-1">
          <div className="px-10 py-6 flex gap-2">
            <div className="flex items-center gap-[53px] mt-[2px]">
              <div
                className="flex items-center gap-1.5 cursor-pointer"
                onClick={() => setToBeVerified(!toBeVerified)}
              >
                <div className="relative w-6 h-6">
                  <div
                    className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                      toBeVerified ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                    }`}
                  >
                    {toBeVerified && <CheckIcon className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                  To be Verify
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[53px] mt-[2px]">
              <div
                className="flex items-center gap-1.5 cursor-pointer"
                onClick={() => setAlreadyVerified(!alreadyVerified)}
              >
                <div className="relative w-6 h-6">
                  <div
                    className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                      alreadyVerified ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                    }`}
                  >
                    {alreadyVerified && <CheckIcon className="h-3 w-3 text-white" />}
                  </div>
                </div>
                <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                  Already
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        
      
    </>
  );
};
