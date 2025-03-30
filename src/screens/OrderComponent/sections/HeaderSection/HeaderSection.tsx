import { CalendarIcon, CheckIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Checkbox } from "../../../../components/ui/checkbox";

export const HeaderSection = (): JSX.Element => {
  const [styleNumber, setStyleNumber] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [isAmendment, setIsAmendment] = useState(false);

  const selectFields = [
    { id: "style", name: "Style Number*", value: styleNumber, setValue: setStyleNumber },
    { id: "order", name: "Order Number*", value: orderNumber, setValue: setOrderNumber },
  ];

  return (
    <div className="flex items-center gap-3 w-full px-10 py-4">
      {selectFields.map((field) => (
        <div
          key={field.id}
          className="flex items-center relative w-full max-w-[331px]"
        >
          <Select value={field.value} onValueChange={field.setValue}>
            <SelectTrigger className="w-full h-12 border border-[#bbbbbb] rounded-lg">
              <SelectValue
                placeholder={field.name}
                className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-100 text-base"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ))}

      <div className="flex items-center relative w-full max-w-[331px]">
        <div className="flex w-full h-12 items-center gap-2.5 px-4 py-2 relative rounded-lg border border-solid border-[#bbbbbb]">
          <input
            type="date"
            value={initialDate}
            onChange={(e) => setInitialDate(e.target.value)}
            className="w-full bg-transparent outline-none [font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-100 text-base"
          />
          <CalendarIcon className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <Checkbox
          id="amendment"
          checked={isAmendment}
          onCheckedChange={(checked) => setIsAmendment(checked as boolean)}
          className="w-6 h-6 border-2 border-[#2c97cd] rounded"
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
