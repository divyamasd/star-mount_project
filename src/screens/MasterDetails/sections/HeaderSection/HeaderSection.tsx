import React, { useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";

export const HeaderSection = (): JSX.Element => {
  const [fromDeliDate, setFromDeliDate] = useState<Date | null>(null);
  const [toDeliDate, setToDeliDate] = useState<Date | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toOrderDate, setToOrderDate] = useState<Date | null>(null);


  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
            name="month"
            placeholder="Month"
            id="month"
          />
        </div>
        <div className="flex-1">
         <TextInput
            name="year"
            placeholder="Year"
            id="year"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name="buyer"
            placeholder="Buyer"
            id="buyer"
          />
        </div>
        <div className="flex-1">
          <TextInput
            name="season"
            placeholder="Season"
            id="season"
          />
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="style number"
            placeholder="Style number"
            id="style number"
          />
        </div>
        <div className="flex-1">
         <TextInput
            name="order number"
            placeholder="Order number"
            id="order number"
          />
        </div>

        <div className="flex-1">
         <CalendarInput
            selectedDate={fromDeliDate}
            setSelectedDate={setFromDeliDate}
            placeholder=" From Del. Date"
            id="fromdelDatePicker"
          />
        </div>
        <div className="flex-1">
         <CalendarInput
            selectedDate={toDeliDate}
            setSelectedDate={setToDeliDate}
            placeholder="To Del. Date"
            id="todelDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="style group"
            placeholder="Style group"
            id="style group"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="location"
            placeholder="Location"
            id="location"
          />
        </div>

        <div className="flex-1">
         <CalendarInput
            selectedDate={fromDate}
            setSelectedDate={setFromDate}
            placeholder="From Date"
            id="fromDatePicker"
          />
        </div>

        <div className="flex-1">
         <CalendarInput
            selectedDate={toOrderDate}
            setSelectedDate={setToOrderDate}
            placeholder="To Order Date"
            id="toOrderDatePicker"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="merchandiser"
            placeholder="Merchandiser"
            id="merchandiser"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="other group"
            placeholder="Other group"
            id="other group"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="detail type"
            placeholder="Detail type"
            id="detail type"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-left">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Show
            </Button>
          </div>
        </div>
      </div>
      
    </>
  );
};

