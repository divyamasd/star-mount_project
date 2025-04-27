import React, { useRef, useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  const [Date, setDate] = useState<Date | null>(null);
  const options = ["Company 1", "Company 2", "Company 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name="vendor"
            options={options}
            placeholder="Vendor"
            id="vendor"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="order number"
            options={options}
            placeholder="Order number"
            id="order number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="style number"
            options={options}
            placeholder="Style number"
            id="style number"
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

      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
            name="customer"
            options={options}
            placeholder="Customer"
            id="customer"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="order number"
            options={options}
            placeholder="Order number"
            id="order number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="component"
            options={options}
            placeholder="Component"
            id="component"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name="merchandiser"
            options={options}
            placeholder="Merchandiser"
            id="merchandiser"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <SelectInput
            name="bo/art number"
            options={options}
            placeholder="BO. No./ Art No."
            id="bo/art number"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name="number of skins"
            options={options}
            placeholder="Number of skins"
            id="number of skins"
          />
        </div>

        <div className="flex-1">
         <TextInput
           name="order qty"
           placeholder="Order Qty."
           id="order qty"
         />
        </div>

        <div className="flex-1">
          
        </div>
      </div>

      <div className="px-10 mt-6">
          <div className="flex items-center gap-[53px]">
            <div className="flex items-center gap-1.5">
              <Checkbox id="fresh" className="w-4 h-4 border-blue" />
              <label
                htmlFor="fresh"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Fresh
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox id="alter" className="w-4 h-4 border-blue" />
              <label
                htmlFor="alter"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Alter
              </label>
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox id="receive" className="w-4 h-4 border-buek" />
              <label
                htmlFor="receive"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Receive
              </label>
            </div>
            <div className="flex items-center gap-1.5">
              <Checkbox id="recSummary" className="w-4 h-4 border-buek" />
              <label
                htmlFor="recSummary"
                className="font-mulish font-medium text-foundationgreygrey-300 text-base"
              >
                Rec Summry
              </label>
            </div>
            
          </div>
        </div>


      
        
      
    </>
  );
};
