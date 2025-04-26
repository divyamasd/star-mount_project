import { CalendarIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../../../../components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const OrderEntrySection = (): JSX.Element => {
  const [currentProductId, setCurrentProductId] = useState(null);
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [focusedSelects, setFocusedSelects] = useState<{ [key: string]: boolean }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState("");


  const handleSelectChange = (fieldId: any, value: any) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldId]: value === "none" ? "" : value,
    }));
  };

  const handleSelectFocusChange = (fieldId: string, isFocused: boolean) => {
    setFocusedSelects((prev) => ({
      ...prev,
      [fieldId]: isFocused,
    }));
  };

  const productImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-1.png",
      alt: "Main product image",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-2.png",
      alt: "Product variant",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-3.png",
      alt: "Product variant",
    },
  ];

  const formFields = [
    { id: "buyer", label: "Buyer*", type: "input" },
    { id: "styleNumber", label: "Style Number*", type: "select" },
    { id: "orderNumber", label: "Order Number*", type: "select" },
    { id: "deliveryDate", label: "Delivery Date*", type: "select" },
    { id: "entryDate", label: "Entry Date*", type: "date" },
  ];

  return (
    <Card className="w-full rounded-2xl border-[0.5px] border-solid border-[#bbbbbb] shadow-small-card-shadow1 p-10">
      <div className="flex gap-[60px]">
        <div className="flex flex-col w-[88px] items-start gap-[19px]">
          {productImages.map((image) => (
            <img
              key={image.id}
              className={`w-full object-cover cursor-pointer ${image.id === currentProductId ? "border-2 border-blue-500" : ""}`}
              style={{ height: image.id === 2 ? "109px" : "87px" }}
              alt={image.alt}
              src={image.src}
              onClick={() => setCurrentProductId(image.id)}
            />
          ))}
        </div>

        <div className="relative w-1/4 h-[363px] pt-8 pb-0 px-4 bg-[url(https://c.animaapp.com/m8o62etcI5Wrge/img/image-4.png)] bg-cover bg-center border-0">
          <Badge className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-foundation-successsuccess-50 text-foundation-successsuccess-500 border-[0.5px] border-solid border-[#0ba700] rounded-3xl">
            <img className="w-4 h-4" alt="Discount shape" src="https://c.animaapp.com/m8o62etcI5Wrge/img/discount-shape.svg" />
            <span className="font-mulish-12-sp-medium text-foundation-successsuccess-500">2 Colour Added</span>
          </Badge>

          <Button variant="ghost" size="icon" className="absolute top-2 right-2 w-8 h-8 p-0 bg-foundation-greygrey-100 rounded-full">
            <Trash2Icon className="w-5 h-5" />
          </Button>

          <button className="absolute bottom-4 left-4 w-[69px] h-[79px] focus:outline-none">
            <div className="w-[67px] h-[67px] bg-white rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <div className="w-[53px] h-[53px] bg-[#bbf8ff87] rounded-full flex items-center justify-center">
                <span className="text-[#2c97cd] text-[36px] font-bold leading-none">+</span>
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col w-[354px] gap-[18px]">
          {formFields.map((field) => (
            <div key={field.id} className="w-full">
              {field.type === "input" && (
               <div key={field.id} className="relative w-full">
               <input
                 id={field.id}
                 name={field.id}
                 type="text"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder=" "
                 className={`
                   peer block w-full h-[34px] text-[15px]
                   px-2.5 pt-4 pb-2
                   text-gray-900 bg-white rounded-md
                   border border-gray-300 appearance-none
                   focus:outline-none focus:ring-0 focus:border-gray-600
                   placeholder-transparent
                 `}
               />
             
               <label
                 htmlFor={field.id}
                 className={`
                   absolute left-2 z-10 bg-white px-1 text-sm font-normal
                   transition-all duration-200
                   ${inputValue
                     ? "top-[-0.4rem] scale-75 text-blue-400"
                     : "top-[0.65rem] scale-100 text-black"}
                   peer-focus:top-[-0.4rem]
                   peer-focus:scale-75
                   peer-focus:text-blue-400
                 `}
                 style={{
                   transformOrigin: "top left",
                   lineHeight: "1",
                   height: "20px",
                   display: "flex",
                   alignItems: "center",
                 }}
               >
                 {field.label}
               </label>
             </div>
             
             
              
              
              )}

              {field.type === "select" && (
                <div className="relative w-full">
                  <Select
                    onValueChange={(value) => handleSelectChange(field.id, value)}
                    onOpenChange={(open) => handleSelectFocusChange(field.id, open)}
                  >
                    <SelectTrigger className="w-full px-2.5 pb-2 pt-4 h-[34px] text-[15px] text-gray-900 bg-white rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer placeholder:text-sm">
                      <SelectValue placeholder="">
                        {selectedValues[field.id] ? (
                          <span className="text-black">{selectedValues[field.id]}</span>
                        ) : (
                          <span className="text-[#bbbbbb]">{field.label}</span>
                        )}
                      </SelectValue>
                    </SelectTrigger>

                    <SelectContent
                      side="bottom"
                      align="start"
                      sideOffset={0}
                      position="popper"
                      className="w-full bg-white border border-gray-300 shadow-lg rounded-lg z-50"
                    >
                      <SelectItem value="none" className="p-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                        None (Deselect)
                      </SelectItem>
                      <SelectItem value="1" className="p-2 hover:bg-gray-100 cursor-pointer">1</SelectItem>
                      <SelectItem value="2" className="p-2 hover:bg-gray-100 cursor-pointer">2</SelectItem>
                      <SelectItem value="3" className="p-2 hover:bg-gray-100 cursor-pointer">3</SelectItem>
                    </SelectContent>
                  </Select>

                  <label
                    className={`absolute left-2 z-10 bg-white px-1 text-sm font-normal transition-all duration-200
                      ${focusedSelects[field.id] || selectedValues[field.id]
                        ? "top-[-0.4rem] scale-75 text-blue-400"
                        : "top-[0.65rem] scale-100 text-black"
                      }`}
                    style={{
                      transformOrigin: "top left",
                      lineHeight: "1", // keeps it tight and vertical
                      height: "20px",  // optional tweak for consistency
                      display: "flex",
                      alignItems: "center", // vertical centering
                    }}
                  >
                    {field.label}
                  </label>

                </div>
              )}

              {field.type === "date" && (
                <div className="relative w-full">
                  <input
                    type="text"
                    value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                    placeholder={field.label}
                    readOnly
                    className="
                      w-full h-[34px] text-[15px]
                      px-2.5 pb-1.5 pt-2
                      text-gray-900 bg-white rounded-md
                      border border-gray-300 appearance-none
                      focus:outline-none focus:ring-0 focus:border-gray-600
                      peer placeholder:text-sm
                    "
                  />
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    popperPlacement="right-start"
                    dateFormat="PPP"
                    customInput={
                      <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <CalendarIcon className="w-5 h-5 pb-1 text-gray-500 cursor-pointer" />
                      </button>
                    }
                  />
                  <label
                    className={`
                      absolute left-2.5 z-10 bg-white px-1 text-sm font-normal
                      transition-all duration-200 origin-[0]
                      ${selectedDate
                        ? "top-[-0.4rem] scale-75 text-blue-400"
                        : "top-[0.65rem] scale-100 text-black"}
                    `}
                    style={{ transformOrigin: "top left" }}
                  >
                    {field.label}
                  </label>
                </div>
              )}


            </div>
          ))}
          <div className="mt-5 flex gap-[53px]">
            <div className="flex items-center gap-1.5">
              <Checkbox id="new-entry" className="w-4 h-4 border border-blue" />
              <Label htmlFor="new-entry" className="font-medium text-foundationgreygrey-300 text-base">
                New Entry
              </Label>
            </div>

            <div className="flex items-center gap-1.5">
              <Checkbox id="style-entry" className="w-4 h-4 border border-blue" />
              <Label htmlFor="style-entry" className="font-medium text-foundationgreygrey-300 text-base">
                Style Entry
              </Label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
