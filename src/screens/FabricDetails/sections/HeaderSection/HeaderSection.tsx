import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { TextInput } from "../../../../components/FormInputs/TextInput";

export const HeaderSection = (): JSX.Element => {
  const [copyItem, setCopyItem] = useState(false);
  

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <TextInput
          name="style number"
          placeholder="Style number"
          id="style number"
          />
        </div>
        <div className="flex-1">
        <TextInput
          name="order number"
          placeholder="Order number"
          id="order number"
          />
        </div>

        <div className="flex-1">
         <TextInput
          name="buyer"
          placeholder="Buyer"
          id="buyer"
          />
        </div>
        <div className="flex-1">
         <TextInput
          name="location"
          placeholder="Location"
          id="location"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
         <div className="flex items-center gap-[53px] mt-[2px]">
                     <div
                       className="flex items-center gap-1.5 cursor-pointer"
                       onClick={() => setCopyItem(!copyItem)}
                     >
                       <div className="relative w-6 h-6">
                         <div
                           className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                             copyItem ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                           }`}
                         >
                           {copyItem && <CheckIcon className="h-3 w-3 text-white" />}
                         </div>
                       </div>
                       <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
                         Copy Single Item
                       </div>
                     </div>
                   </div>
        </div>
        <div className="flex-1">
        
        </div>

        <div className="flex-1">
        
        </div>
        <div className="flex-1">
         <div className="flex justify-end">
           <Button className="w-[138px] bg-[#2c97cd] font-mulish font-semibold text-white text-sm rounded-lg" onClick={() => alert("clicked")}>
             Show
           </Button>
         </div>
        </div>
      </div>

     
      
    </>
  );
};
