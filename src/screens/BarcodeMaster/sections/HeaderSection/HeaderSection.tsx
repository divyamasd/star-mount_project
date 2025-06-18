import {CheckIcon} from "lucide-react";
import React, { useState, forwardRef, useRef } from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // State variables
  const [initialDate, setInitialDate] = useState<Date | null>(null);

  const [isAmendment, setIsAmendment] = useState(false);
  const options = ["one", "two", "three"];


  return (
    <div className="flex flex-col gap-3 w-full px-10">
      {/* Row 1 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Style Number */}
        <div className="w-[331px]">
          <SelectInput
            name = "buyer"
            options={options}
            placeholder = "Buyer"
            id = "buyer"
          />
        </div>

     
       
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-3 w-full flex-wrap">
        {/* Buyer Name */}
        <div className="w-[331px]">
        <SelectInput
            name = "style"
            options={options}
            placeholder = "Style"
            id = "style"
          />
        </div>

      </div>

      {/*ROW 3*/}
      <div className="flex items-center gap-3 w-full flex-wrap">
       
        <div className="w-[331px]">
        <TextInput
            name = "Color"
            placeholder = "Color"
            id = "Color"
          />
        </div>

      
        <div className="w-[331px]">
           <div className="flex items-center gap-3">
                       <Button className="bg-[#03c303] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
                         Display
                       </Button>
                     </div>
        </div>
      </div>
    </div>
  );
};
