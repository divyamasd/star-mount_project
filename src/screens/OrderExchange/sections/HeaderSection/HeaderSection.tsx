import React, { useState } from "react";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";

export const HeaderSection = (): JSX.Element => {
  const [initialDate, setInitialDate] = useState<Date | null>(null);
  const [excessDate, setExcessDate] = useState<Date | null>(null);

  const styleNumbers = ["Style 1", "Style 2", "Style 3"];
  const orderNumbers = ["Order 1", "Order 2", "Order 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name= "style number"
            options = {styleNumbers}
            placeholder = "Style Number*"
            id = "style number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={initialDate}
            setSelectedDate={setInitialDate}
            placeholder="Initial Date*"
            id="initialDatePicker"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name= "order number"
            options = {orderNumbers}
            placeholder = "Order Number*"
            id = "order number"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name= "pobo number"
            placeholder = "PO /BO Number"
            id = "pobo number"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <CalendarInput
            selectedDate={excessDate}
            setSelectedDate={setExcessDate}
            placeholder="Excess on Delivery date*"
            id="excessDatePicker"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name= "country"
            options = {orderNumbers}
            placeholder = "Country*"
            id = "country"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name= "color"
            options = {orderNumbers}
            placeholder = "Color*"
            id = "color"
          />
        </div>

        <div className="flex-1">
          <TextInput
            name= "size"
            placeholder = "Size"
            id = "size"
          />
        </div>
      </div>
    </>
  );
};
