import { CalendarIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import React from "react";
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
import { useState } from "react";
import { SelectContent } from "@radix-ui/react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const PackingDetailsSection = (): JSX.Element => {
  const [currentProductId, setCurrentProductId] = useState(null);
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleSelectChange = (fieldId:any, value:any) => {
    setSelectedValues((prev) => ({
      ...prev,
      [fieldId]: value === "none" ? "" : value, // Reset to placeholder when "None" is selected
    }));
  };
  // Product images data
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

  // Form fields data
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
              className={`w-full object-cover cursor-pointer ${
                image.id === currentProductId ? "border-2 border-blue-500" : ""
              }`}
              style={{ height: image.id === 2 ? "109px" : "87px" }}
              alt={image.alt}
              src={image.src}
              onClick={() => setCurrentProductId(image.id)} // Set selected product
            />
          ))}
        </div>
        {/*Big pic section*/}
        <div className="relative w-1/4 h-[363px] pt-8 pb-0 px-4 bg-[url(https://c.animaapp.com/m8o62etcI5Wrge/img/image-4.png)] bg-cover bg-center border-0">
          {/* Badge - Top Left */}
          <Badge className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-foundation-successsuccess-50 text-foundation-successsuccess-500 border-[0.5px] border-solid border-[#0ba700] rounded-3xl">
            <img className="w-4 h-4" alt="Discount shape" src="https://c.animaapp.com/m8o62etcI5Wrge/img/discount-shape.svg" />
            <span className="font-mulish-12-sp-medium text-foundation-successsuccess-500">2 Colour Added</span>
          </Badge>

          {/* Button - Top Right */}
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 w-8 h-8 p-0 bg-foundation-greygrey-100 rounded-full">
            <Trash2Icon className="w-5 h-5" />
          </Button>

          {/* Bottom Left Div */}
          <button className="absolute bottom-4 left-4 w-[69px] h-[79px] focus:outline-none">
            <div className="w-[67px] h-[67px] bg-white rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <div className="w-[53px] h-[53px] bg-[#bbf8ff87] rounded-full flex items-center justify-center">
                <span className="text-[#2c97cd] text-[36px] font-bold leading-none">+</span>
              </div>
            </div>
          </button>
        </div>


        
        {/* Form Section */}
        <div className="flex flex-col w-[354px] gap-[18px]">
          {formFields.map((field) => (
            <div key={field.id} className="w-full">
              {field.type === "input" && (
                <Input
                  className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]"
                  placeholder={field.label}
                />
              )}

              {field.type === "select" && (
              <div className="relative w-full">
                <Select
                  onValueChange={(value) => handleSelectChange(field.id, value)}
                >
                  <SelectTrigger className="h-12 w-full px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]">
                    <SelectValue placeholder={field.label}>
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
              </div>
              )}

              {field.type === "date" && (
                <div className="relative w-full">
                  {/* Read-only input field to display the selected date */}
                  <input
                    type="text"
                    value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                    placeholder={field.label}
                    readOnly
                    className="h-12 w-full px-4 py-2 rounded-lg border border-solid border-[#bbbbbb] text-black bg-white"
                  />

                  {/* Calendar Icon (click to open DatePicker) */}
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    popperPlacement="right-start"
                    dateFormat="PPP"
                    customInput={
                      <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <CalendarIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                      </button>
                    }
                  />
                </div>
              )}
            </div>
          ))}
          <div className="mt-10 flex gap-[53px]">
            <div className="flex items-center gap-1.5">
              <Checkbox id="new-entry" className="w-4 h-4 border border-blue" />
              <Label
                htmlFor="new-entry"
                className="font-medium text-foundationgreygrey-300 text-base"
              >
                Style/Ship Order
              </Label>
            </div>
          </div>
        </div>
      </div>

    </Card>
  );
};
