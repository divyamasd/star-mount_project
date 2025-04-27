import React, { useRef, useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  const [recDate, setRecDate] = useState<Date | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  const [consolidateDate, setConsolidateDate] = useState<Date | null>(null);
  const [challanDate, setChallanDate] = useState<Date | null>(null);
  const [entryDate, setEntryDate] = useState<Date | null>(null);
  
  const options = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "rec number"
            options={options}
            placeholder = "Rec No.*"
            id = "rec number"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={recDate}
            setSelectedDate={setRecDate}
            placeholder="Rec Date"
            id="recDatePicker"
          />
        </div>

        <div className="flex-1">
          
         <SelectInput
            name = "department/vendor"
            options={options}
            placeholder = "Department/Vendor*"
            id = "department/vendor"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name = "process"
            options={options}
            placeholder = "Process"
            id = "process"
          />
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
            name = "po number"
            options={options}
            placeholder = "PO No.*"
            id = "po number"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name = "style number"
            options={options}
            placeholder = "Style No.*"
            id = "style number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "order number"
            options={options}
            placeholder = "Order No.*"
            id = "order number"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={deliveryDate}
            setSelectedDate={setDeliveryDate}
            placeholder="Delivery Date"
            id="deliveryDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
        <SelectInput
            name = "time zone"
            options={options}
            placeholder = "Time Zone"
            id = "time zone"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "component"
            options={options}
            placeholder = "Component"
            id = "component"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={consolidateDate}
            setSelectedDate={setConsolidateDate}
            placeholder="Considate Qty."
            id="considateQtyDatePicker"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="country"
            placeholder="Country"
            id="country"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
            name="total rec quantity"
            placeholder="Total Rec quantity"
            id="total rec quantity"
          />
        </div>

        <div className="flex-1">
         <TextInput
            name="challan number"
            placeholder="Challan number"
            id="challan number"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={challanDate}
            setSelectedDate={setChallanDate}
            placeholder="Challan Date"
            id="challanDatePicker"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "gate number"
            options={options}
            placeholder = "Gate number"
            id = "gate number"
          />
        </div>
      </div>
      
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <CalendarInput
            selectedDate={entryDate}
            setSelectedDate={setEntryDate}
            placeholder="Gate Entry Date"
            id="gateEntryDatePicker"
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
          {/*for spacing */}
        </div>

        <div className="flex-1">
          {/*for spacing */}
        </div>
      </div>
      
        
      
    </>
  );
};
