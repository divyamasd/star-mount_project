import {CheckIcon} from "lucide-react";
import React, { useState} from "react";
import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { Button } from "../../../../components/ui/button";


export const HeaderSection = (): JSX.Element => {
  // State variables
  const [initialDate, setInitialDate] = useState<Date | null>(null);

  const [isAmendment, setIsAmendment] = useState(false);
  const options = ["one", "two", "three"];


  return (
    <div className="flex flex-col gap-3 w-full px-10 mt-6">
      {/* Row 1 */}
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="company code" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Company Code
          </label>
          <SelectInput
            name="company code"
            options={options}
            placeholder="Company code"
            id="company code"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="pan number" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Pan No.
          </label>
          <SelectInput
            name="pan number"
            options={options}
            placeholder="Pan no."
            id="pan number"
          />
        </div>

        {/* Amendment Toggle */}
        <div className="flex items-center gap-[53px] mt-[2px]">
          <div
            className="flex items-center gap-1.5 cursor-pointer"
            onClick={() => setIsAmendment(!isAmendment)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`relative w-4 h-4 top-1 left-1 rounded flex items-center justify-center ${
                  isAmendment ? "bg-[#2c97cd]" : "border border-[#bbbbbb]"
                }`}
              >
                {isAmendment && <CheckIcon className="h-3 w-3 text-white" />}
              </div>
            </div>
            <div className="[font-family:'Mulish',Helvetica] font-medium text-foundationgreygrey-300 text-base">
              Set Default Company
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="company name" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Company Name
          </label>
          <SelectInput
            name="company name"
            options={options}
            placeholder="Company name"
            id="company name"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="ie code" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            IE Code
          </label>
          <SelectInput
            name="ie code"
            options={options}
            placeholder="IE Code"
            id="ie code"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="rcmc no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            RCMC NO.
          </label>
          <SelectInput
            name="rcmc no."
            options={options}
            placeholder="RCMC no."
            id="rcmc no."
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="lst no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            L.S.T No.
          </label>
          <SelectInput
            name="lst no."
            options={options}
            placeholder="LST no.*"
            id="lst no."
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="address 1" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Address 1
          </label>
          <SelectInput
            name="address 1"
            options={options}
            placeholder="Address 1"
            id="address 1"
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="address 1" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Address 2
          </label>
          <SelectInput
            name="address 1"
            options={options}
            placeholder="Address 2"
            id="style number"
            
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="address 1" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Address 2
          </label>
          <SelectInput
            name="address 1"
            options={options}
            placeholder="Address 2"
            id="style number"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="zip code" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Zip code
          </label>
          <SelectInput
            name="zip code"
            options={options}
            placeholder="Zip code"
            id="zip code"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="address 3" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Address 3
          </label>
          <SelectInput
            name="address 3"
            options={options}
            placeholder="Address 3"
            id="address 3"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="city" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            City
          </label>
          <SelectInput
            name="city"
            options={options}
            placeholder="City"
            id="city"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="country name" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Country Name
          </label>
          <SelectInput
            name="country name"
            options={options}
            placeholder="country name"
            id="country name"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="state" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            State
          </label>
          <SelectInput
            name="state"
            options={options}
            placeholder="State"
            id="state"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="fax" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Fax
          </label>
          <SelectInput
            name="fax"
            options={options}
            placeholder="Fax"
            id="fax"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="telephone" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Telephone
          </label>
          <SelectInput
            name="telephone"
            options={options}
            placeholder="Telephone"
            id="telephone"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="web Address" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Web Address
          </label>
          <SelectInput
            name="web Address"
            options={options}
            placeholder="Web Address"
            id="web Address"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="email" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Email
          </label>
          <SelectInput
            name="email"
            options={options}
            placeholder="Email"
            id="email"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="commission" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Commission%
          </label>
          <SelectInput
            name="commission"
            options={options}
            placeholder="commission"
            id="commission"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="cst no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            C.S.T No.
          </label>
          <SelectInput
            name="cst no."
            options={options}
            placeholder="cst no."
            id="cst no."
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="central excise number" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Central Excise No.
          </label>
          <SelectInput
            name="central excise number"
            options={options}
            placeholder="Central Excise number"
            id="central excise number"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="cst date" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            C.S.T Date
          </label>
          <SelectInput
            name="cst date"
            options={options}
            placeholder="CST date"
            id="cst date"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="division" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Division
          </label>
          <SelectInput
            name="division"
            options={options}
            placeholder="Division"
            id="division"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="range" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Range
          </label>
          <SelectInput
            name="range"
            options={options}
            placeholder="range"
            id="range"
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="tin no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            TIN No.
          </label>
          <SelectInput
            name="tin no."
            options={options}
            placeholder="TIN no.*"
            id="tin no."
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="vat no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            VAT No.
          </label>
          <SelectInput
            name="vat no."
            options={options}
            placeholder="VAT no."
            id="vat no."
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="sale tax no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Sale Tax No.
          </label>
          <SelectInput
            name="sale tax no."
            options={options}
            placeholder="Sale Tax no.*"
            id="sale tax no."
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="gst reg no." className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            GST reg. No.
          </label>
          <SelectInput
            name="gst reg no."
            options={options}
            placeholder="GST reg no.*"
            id="gst reg no."
          />
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="central ex. address" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Central Ex. Address
          </label>
          <SelectInput
            name="central ex. address"
            options={options}
            placeholder="Central ex. Address*"
            id="central ex. address"
            
          />
        </div>

        <div className="flex items-center gap-2 w-[500px]">
            <Button className="w-[138px] bg-[#20c86c] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Add Logo
            </Button>
            <Button className="w-[138px] bg-[#faa720] text-white font-semibold text-sm rounded-lg" onClick={() => alert("clicked")}>
              Remove Logo
            </Button>
        </div>

      </div>
      <div className="flex items-center gap-x-10 gap-y-4 w-full flex-wrap">
        {/* Style Number */}
        <div className="flex items-center gap-2 w-[500px]">
          <label htmlFor="company slogan" className="w-[100px] font-semibold [font-family:'Mulish',Helvetica]">
            Company Slogan
          </label>
          <SelectInput
            name="company slogan"
            options={options}
            placeholder="Company Slogan"
            id="company slogan"
            
          />
        </div>

        

      </div>
      

      
    </div>
  );
};
