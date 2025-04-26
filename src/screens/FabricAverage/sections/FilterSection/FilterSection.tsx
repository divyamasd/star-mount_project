import React, { useState } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { CalendarInput } from "../../../../components/FormInputs/CalendarInput";


export const FilterSection = (): JSX.Element => {

  const [initialDate, setInitialDate] = useState<Date | null>(null);

  const options = ["one", "two", "three"];

  return (
    <div className="flex flex-col w-full items-start gap-5 mt-4 px-10">
      <div className="flex items-center gap-3 w-full flex-wrap">

        {/* Style Number (Select) */}
        <div className="w-full max-w-[331px]">
          <SelectInput
            name = "style number"
            options = {options}
            placeholder = "Style Number*"
            id = "style number"
          />
        </div>

        {/* Order No. (Text Input) */}
        <div className="w-full max-w-[331px]">
          <TextInput
            name="order number"
            placeholder ="Order No."
            id="order number"
          />
        </div>

        {/* Initial Date (Date Picker with Icon) */}
        <div className="w-full max-w-[331px] relative">
          <CalendarInput
            selectedDate={initialDate}
            setSelectedDate={setInitialDate}
            placeholder="Initial Date"
            id="initial date"
          />
        </div>

        {/* Component (Select) */}
        <div className="w-full max-w-[331px]">
          <SelectInput
            name = "component"
            options={options}
            placeholder = "Component"
            id = "component"
          />
        </div>
      </div>
    </div>
  );
};
