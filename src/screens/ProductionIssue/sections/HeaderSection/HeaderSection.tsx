import React, { useRef, useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  const [Date, setDate] = useState<Date | null>(null);
  const vendorNumbers = ["Vendor 1", "Vendor 2", "Vendor 3"];
  const billNumbers = ["1", " 2", " 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
             name="issue number"
             options={billNumbers}
             placeholder="Issue Number*"
             id="issue number"
          />
        </div>
        <div className="flex-1">
         <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Issue Date*"
            id="issueDatePicker"
          />
        </div>

        <div className="flex-1">
         <SelectInput
             name="department/vendor"
             options={vendorNumbers}
             placeholder="Department/Vendor*"
             id="department/vendor"
          />
        </div>
        <div className="flex-1">
         <SelectInput
             name="process"
             options={billNumbers}
             placeholder="Process*"
             id="process"
          />
        </div>

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
             name="po number"
             options={billNumbers}
             placeholder="PO Number*"
             id="po number"
          />
        </div>
        <div className="flex-1">
        <SelectInput
             name="style number"
             options={billNumbers}
             placeholder="Style Number*"
             id="style number"
          />
        </div>

        <div className="flex-1">
        <SelectInput
             name="order number"
             options={billNumbers}
             placeholder="Order Number*"
             id="order number"
          />
        </div>
        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Delivery Date*"
            id="deliveryDatePicker"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
        <SelectInput
             name="time zone"
             options={billNumbers}
             placeholder="Time Zone*"
             id="time zone"
          />
        </div>

        <div className="flex-1">
         <SelectInput
             name="component"
             options={billNumbers}
             placeholder="Component"
             id="component"
          />
        </div>

        <div className="flex-1">
          <CalendarInput
            selectedDate={Date}
            setSelectedDate={setDate}
            placeholder="Inhouse Date*"
            id="inhouseDatePicker"
          />
        </div>

        <div className="flex-1">
          <TextInput
           name="actual cutt number"
           placeholder="Actual Cutt. No."
           id="actual cutt number"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
           name="return number"
           placeholder="Return No."
           id="return number"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="bo/po#"
           placeholder="BO/PO#"
           id="bo/po#"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="country"
           placeholder="Country"
           id="country"
          />
        </div>

        <div className="flex-1">
        <SelectInput
             name="total issue quantity"
             options={billNumbers}
             placeholder="Total Issue Quantity*"
             id="total issue quantity"
          />
        </div>
      </div>
      
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
           name="transport number"
           placeholder="Transport No."
           id="transport number"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="vehical number"
           placeholder="Vehical No."
           id="vehical number"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="eway number"
           placeholder="Eway No."
           id="eway number"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="consolidate quantity"
           placeholder="Consolidate Quantity"
           id="consolidate quantity"
          />
        </div>
      </div>
      
        
      
    </>
  );
};
