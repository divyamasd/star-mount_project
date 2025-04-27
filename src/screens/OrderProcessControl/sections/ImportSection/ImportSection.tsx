import React, { useRef, useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { Button } from "../../../../components/ui/button";

export const ImportSection = (): JSX.Element => {
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  
  const styleNumbers = ["Company 1", "Company 2", "Company 3"];
  const orderNumbers = ["Order 1", "Order 2", "Order 3"];
  

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name="style number"
            options={styleNumbers}
            placeholder="Style No."
            id="style number"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="order number"
            options={orderNumbers}
            placeholder="Order No."
            id="order number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={deliveryDate}
            setSelectedDate={setDeliveryDate}
            placeholder="Delivery Date"
            id="DatePicker"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-center ">
            <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
              Import
            </Button>
          </div>
        </div>
      </div>     
    </>
  );
};
