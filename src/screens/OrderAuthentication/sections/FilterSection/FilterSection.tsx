import { CheckIcon } from "lucide-react";
import React, { useState, forwardRef, useRef } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const FilterSection = (): JSX.Element => {
  // State variables
  const [orderFrom, setOrderFrom] = useState("");
  const [orderTo, setOrderTo] = useState("");
  const [orderDate, setOrderDate] = useState<Date | null>(null);
  const [buyerName, setBuyerName] = useState("");
  const [styleNumber, setStyleNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [toBeVerified, setToBeVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  const options = ["one", "two", "three"];


  return (
    <div className="flex flex-col gap-3 w-full mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
       
        <div className="w-[331px]">
          <SelectInput
           name = "order from"
           options={options}
           placeholder="Order From"
           id="order from"
          />
        </div>

        {/* Order Number */}
        <div className="w-[331px]">
         <SelectInput
           name = "order to date"
           options={options}
           placeholder="Order to date"
           id="order to date"
          />
        </div>

        {/* Initial Date */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={orderDate}
            setSelectedDate={setOrderDate}
            placeholder="Order Date*"
            id="orderDatePicker"
          />
        </div>

        {/*Toggle */}
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

      {/* Row 2 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Buyer Name */}
        <div className="w-[331px]">
         <SelectInput
           name = "buyer name"
           options={options}
           placeholder="Buyer name"
           id="buyer name"
          />
        </div>

        {/* Order Type */}
        <div className="w-[331px]">
         <SelectInput
           name = "style number"
           options={options}
           placeholder="Style number*"
           id="style number"
          />
        </div>
        <div className="w-[331px]">
         <SelectInput
           name = "order type"
           options={options}
           placeholder="Order type*"
           id="order type"
          />
        </div>
      </div>
    </div>
  );
};
