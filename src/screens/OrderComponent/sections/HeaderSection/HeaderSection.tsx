import React, { useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";

export const HeaderSection = (): JSX.Element => {
  const [isAmendment, setIsAmendment] = useState(false);
  const [initialDate, setInitialDate] = useState<Date | null>(null);

  const options = ["one", "two", "three"];
  const selectFields = [
    { id: "style", name: "style Number*", placeholder: "Style Number*"},
    { id: "order", name: "order Number*", placeholder: "Order Number*"},
  ];

  return (
    <div className="flex items-center gap-3 w-full px-10 py-4">
      {selectFields.map((field) => (
        <div
          key={field.id}
          className="flex items-center relative w-full max-w-[331px]"
        >
          <SelectInput
            name = {field.name}
            options={options}
            placeholder={field.placeholder}
            id={field.id}
          />
        </div>
      ))}

      <div className="flex items-center relative w-full max-w-[331px]">
        <CalendarInput
          selectedDate = {initialDate}
          setSelectedDate= {setInitialDate}
          placeholder="Initial date"
          id= "initial date"
        />
      </div>

      <div className="flex items-center gap-1.5">
        <Checkbox
          id="amendment"
          checked={isAmendment}
          onCheckedChange={(checked) => setIsAmendment(checked as boolean)}
          className="w-5 h-5 border-2 border-[#2c97cd] rounded"
        />
        <label
          htmlFor="amendment"
          className="[font-family:'Mulish',Helvetica] font-medium text-[#6c6c6c] text-base tracking-[0] leading-[19.2px]"
        >
          Amendment
        </label>
      </div>
    </div>
  );
};
