import { CalendarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OrderEntrySection = (): JSX.Element => {
  // Form field data
  const formFields = [
    { id: "buyer", label: "Buyer*", type: "input" },
    { id: "styleNumber", label: "Style Number*", type: "select" },
    { id: "orderNumber", label: "Order Number*", type: "select" },
    { id: "deliveryDate", label: "Delivery Date*", type: "select" },
    { id: "entryDate", label: "Entry Date*", type: "date" },
  ];

  // Menu items data
  const menuItems = [
    "Order Component",
    "Fabric Planning",
    "Fabric Average",
    "Accessory Details",
    "Packing Details",
    "Production Plan Details",
  ];

  // Product images data
  const productImages = [
    {
      src: "https://c.animaapp.com/m8o543k4QHwU7w/img/image-1.png",
      alt: "Product image 1",
      className: "w-[84px] h-[81px] m-0.5",
    },
    {
      src: "https://c.animaapp.com/m8o543k4QHwU7w/img/image-2.png",
      alt: "Product image 2",
      className: "w-full h-[109px]",
    },
    {
      src: "https://c.animaapp.com/m8o543k4QHwU7w/img/image-3.png",
      alt: "Product image 3",
      className: "w-full h-[87px]",
    },
  ];

  return (
    <Card className="w-full bg-pure-white rounded-2xl border-[0.5px] border-solid border-[#bbbbbb] shadow-small-card-shadow1">
      <CardContent className="p-10 flex">
        {/* Product Images Column */}
        <div className="flex flex-col w-[88px] items-start gap-[19px]">
          <div className="relative w-[88px] h-[85px] bg-[#2c97cd]">
            <img
              className={productImages[0].className}
              alt={productImages[0].alt}
              src={productImages[0].src}
            />
          </div>

          {productImages.slice(1).map((image, index) => (
            <img
              key={index}
              className={image.className}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        {/* Menu Column */}
        <div className="ml-[60px] relative">
          <div className="absolute bg-white rounded-lg shadow-small-card-shadow1 border border-[#bbbbbb] z-10">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-2 text-sm ${index === 0 ? "font-medium" : "font-normal"} hover:bg-gray-50 cursor-pointer`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields Column */}
        <div className="flex flex-col w-[354px] items-start gap-[18px] ml-auto">
          {formFields.map((field) => (
            <div key={field.id} className="w-full">
              {field.type === "input" && (
                <Input
                  className="h-12 font-medium text-[#bbbbbb]"
                  placeholder={field.label}
                />
              )}

              {field.type === "select" && (
                <Select>
                  <SelectTrigger className="h-12 font-medium text-[#bbbbbb]">
                    <SelectValue placeholder={field.label} />
                  </SelectTrigger>
                </Select>
              )}

              {field.type === "date" && (
                <div className="relative">
                  <Input
                    className="h-12 font-medium text-[#bbbbbb]"
                    placeholder={field.label}
                  />
                  <CalendarIcon className="absolute right-4 top-3.5 w-5 h-5 text-[#bbbbbb]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>

      {/* Checkbox Options */}
      <div className="flex items-center gap-[53px] absolute bottom-16 left-[580px]">
        <div className="flex items-center gap-1.5">
          <Checkbox
            id="newEntry"
            className="w-4 h-4 bg-[#2c97cd] rounded"
            defaultChecked
          />
          <label
            htmlFor="newEntry"
            className="font-medium text-foundationgreygrey-300 text-base"
          >
            New Entry
          </label>
        </div>

        <div className="flex items-center gap-1.5">
          <Checkbox
            id="styleEntry"
            className="w-4 h-4 rounded border border-solid border-black"
          />
          <label
            htmlFor="styleEntry"
            className="font-medium text-foundationgreygrey-300 text-base"
          >
            Style Entry
          </label>
        </div>
      </div>
    </Card>
  );
};
