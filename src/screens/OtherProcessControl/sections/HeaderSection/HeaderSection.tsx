import { CheckIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  const [Date, setDate] = useState<Date | null>(null);
  const [billingAt, setBillingAt] = useState<Date | null>(null);
  const [materialIssue, setMaterialIssue] = useState(false);
  const invoiceNumbers = ["1", " 2", " 3"];
  const styleNumbers = ["1", " 2", " 3"];
  const poNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name="po number"
            options={poNumbers}
            placeholder="PO Number*"
            id="po number"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="PODate"
            id="PODatePicker"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="department number"
            options={invoiceNumbers}
            placeholder="Department Number*"
            id="department number"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="style number"
            options={styleNumbers}
            placeholder="Style Number*"
            id="style number"
          />
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
            name="order number"
            options={styleNumbers}
            placeholder="Order Number*"
            id="order number"
          />
        </div>
        <div className="flex-1">
         <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="ShipmentDueDate"
            id="shipmentDueDatePicker"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="process"
            options={styleNumbers}
            placeholder="Process"
            id="process"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="component"
            options={styleNumbers}
            placeholder="Component"
            id="component"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
            name="rate"
            options={styleNumbers}
            placeholder="Rate"
            id="rate"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={billingAt}
            setSelectedDate={setBillingAt}
            placeholder="Del. Date"
            id="delDatePicker"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="main fabric"
            options={styleNumbers}
            placeholder="Main fabric"
            id="main fabric"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name="remark"
            placeholder="Remarks"
            id="remark"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="description"
            placeholder="Description"
            id="description"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="article number"
            placeholder="Article number"
            id="article number"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="color"
            placeholder="Color"
            id="color"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="summary quantity"
            options={styleNumbers}
            placeholder="Summary Qty."
            id="summary quantity"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="payment term"
            placeholder="Payment term"
            id="payment term"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setMaterialIssue(!materialIssue)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    materialIssue ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {materialIssue && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Material Issue Agt. Job Order
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-center ">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Add Color Wise
            </Button>
          </div>
        </div>

        <div className="flex-1">
          
        </div>
      </div>
      
       
      
    </>
  );
};
