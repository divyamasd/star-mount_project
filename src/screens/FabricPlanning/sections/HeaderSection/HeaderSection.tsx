import React, { useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";

export const HeaderSection = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const options = ["one","two","three"];

  return (
    <section className="flex flex-col gap-5 w-full mt-6">
      <div className="flex items-center gap-3 w-full">

        {/* Select Input */}
        <div className="w-full max-w-[331px]">
          <SelectInput
            name = "buyer"
            options ={options}
            placeholder= "Buyer"
            id = "buyer"
          />
        </div>

        {/* Text Input */}
        <div className="w-full max-w-[331px]">
          <TextInput
            name="po/bo number"
            placeholder= "PO/BO Number"
            id = "po/bo number"
          />
        </div>

        {/* Date Input (like working implementation) */}
        <div className="w-full max-w-[331px] relative">
          {/* Read-only styled input */}
          <CalendarInput
            selectedDate = {selectedDate}
            setSelectedDate ={setSelectedDate}
            placeholder = "Order Date"
            id = "order date"
          />
        </div>
      </div>
    </section>
  );
};
