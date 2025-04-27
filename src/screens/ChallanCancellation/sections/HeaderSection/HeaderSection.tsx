import React, { useState, forwardRef, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CheckIcon } from "lucide-react";

export const HeaderSection = (): JSX.Element => {
  // State variables
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [toBeVerified, setToBeVerified] = useState<Boolean | null>(null)
  const [alreadyVerified, setAlreadyVerified] = useState<Boolean | null>(null)


  return (
    <div className="flex flex-col gap-3 w-full px-10 mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Style Number */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={fromDate}
            setSelectedDate={setFromDate}
            placeholder="From Date*"
            id="fromDatePicker"
          />
        </div>

        {/* Order Number */}
        <div className="w-[331px]">
          <CalendarInput
           selectedDate={toDate}
            setSelectedDate={setToDate}
            placeholder="To Date*"
            id="toDatePicker"
          />
        </div>

        {/* Initial Date */}
        <div className="w-[331px]">
         <TextInput
           name="vendor"
           placeholder="Vendor"
           id="vendor"
         />
        </div>

        {/* Amendment Toggle */}
        <div className="flex items-center gap-[53px] ">
          <div className="flex justify-center">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Show Details
            </Button>
          </div>
        </div>
      </div>
      <div className="py-6 flex gap-2">
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
                      To Be Verified
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
                      Extra
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
};



