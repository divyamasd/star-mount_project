import {  CheckIcon } from "lucide-react";
import React, {  useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";


export const HeaderSection = (): JSX.Element => {
  const [poDate, setpoDate] = useState<Date | null>(null);
  const [length, setLength] = useState<Date | null>(null);
  const [billingAt, setBillingAt] = useState<Date | null>(null);
  const [inhouseDueDate, setInhouseDueDate] = useState<Date | null>(null);
  const [isLeather, setIsLeather] = useState(false);
  const [isExtra, setIsExtra] = useState(false);
  const [deliScheduleDate, setDeliScheduleDate] = useState<Date | null>(null);

  const companyNumbers = ["Company 1", "Company 2", "Company 3"];
  const poNumbers = ["Order 1", "Order 2", "Order 3"];
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const widthNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "company"
            options={companyNumbers}
            placeholder = "Company"
            id = "company"
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

        <div className="flex-1">
          <CalendarInput
            selectedDate={poDate}
            setSelectedDate={setpoDate}
            placeholder="PO Date"
            id="poDatePicker"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={billingAt}
            setSelectedDate={setBillingAt}
            placeholder="Billing At"
            id="billingAtDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <CalendarInput
            selectedDate={inhouseDueDate}
            setSelectedDate={setInhouseDueDate}
            placeholder="Inhouse Due date*"
            id="inhouseDueDatePicker"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "country"
            options={companyNumbers}
            placeholder = "Country"
            id = "country"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={deliScheduleDate}
            setSelectedDate={setDeliScheduleDate}
            placeholder="Deli Schedule"
            id="deliScheduleDatePicker"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name = "remarks"
            placeholder = "Remarks"
            id = "remarks"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
            name = "program"
            placeholder = "Program"
            id = "program"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "width"
            options={widthNumbers}
            placeholder = "width"
            id = "width"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={length}
            setSelectedDate={setLength}
            placeholder="Length"
            id="lengthPicker"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name = "mode of dispatch"
            placeholder = "Mode of dispatch"
            id = "mode of dispatch"
          />
        </div>
      </div>
      
        <div className="px-10 py-6 flex gap-2">
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setIsExtra(!isExtra)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    isExtra ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {isExtra && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Is Leather
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[53px] mt-[2px]">
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setIsLeather(!isLeather)}
            >
              <div className="relative w-6 h-6">
                <div
                  className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                    isLeather ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                  }`}
                >
                  {isLeather && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>
              <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                Extra
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
