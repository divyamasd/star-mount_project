import React, { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const CreateSelectFinalFabricSection = (): JSX.Element => {
  const [itemGroup, setItemGroup] = useState("");
  const [itemSubGroup, setItemSubGroup] = useState("");

  // Mock data for dropdowns
  const itemGroups = ["Group A", "Group B", "Group C"];
  const itemSubGroups = ["Sub A", "Sub B", "Sub C"];

  // Define data for input fields to make the code more maintainable
  const inputFields = [
    { id: 1, label: "Content" },
    { id: 2, label: "Count" },
    { id: 3, label: "Construction" },
    { id: 4, label: "Width" },
    { id: 5, label: "Thickness" },
    { id: 6, label: "GSM" },
    { id: 7, label: "Fabric Colour" },
    { id: 8, label: "Print" },
    { id: 9, label: "Price Per Unit" },
    { id: 10, label: "Item Quantity" },
  ];

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards mx-10">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="relative h-[49px]">
          <Select onValueChange={setItemGroup}>
            <SelectTrigger className="h-10 mt-[9px] bg-hostbooksbackground border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400">
              <SelectValue placeholder="Item Group" />
            </SelectTrigger>
            <SelectContent>
              {itemGroups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative h-[49px]">
          <Select onValueChange={setItemSubGroup}>
            <SelectTrigger className="h-10 mt-[9px] bg-hostbooksbackground border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400">
              <SelectValue placeholder="Item sub Group" />
            </SelectTrigger>
            <SelectContent>
              {itemSubGroups.map((subGroup) => (
                <SelectItem key={subGroup} value={subGroup}>
                  {subGroup}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {inputFields.map((field) => (
          <div key={field.id} className="relative h-[49px]">
            <Input
              className="h-10 mt-[9px] bg-hostbooksbackground border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
              placeholder={field.label}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="relative h-[49px]">
              <Input
                className="h-10 mt-[9px] bg-hostbooksbackground border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                placeholder="Remarks"
              />
            </div>
            <div className="relative h-[49px]">
              <Input
                className="h-10 mt-[9px] bg-hostbooksbackground border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                placeholder="Remarks"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
