import { CalendarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const OrderEntrySection = (): JSX.Element => {
  // Product images data
  const productImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-1.png",
      alt: "Main product image",
      isCurrent: true,
    },
    {
      id: 2,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-2.png",
      alt: "Product variant",
      isCurrent: false,
    },
    {
      id: 3,
      src: "https://c.animaapp.com/m8o62etcI5Wrge/img/image-3.png",
      alt: "Product variant",
      isCurrent: false,
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
        {/* Product Images Section */}
        <div className="flex flex-col w-[88px] items-start gap-[19px]">
          <div className="relative w-[88px] h-[85px] bg-[#2c97cd]">
            <Badge className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs">
              2 Colour Added
            </Badge>
            <img
              className="absolute w-[84px] h-[81px] top-0.5 left-0.5 object-cover"
              alt={productImages[0].alt}
              src={productImages[0].src}
            />
          </div>

          {productImages.slice(1).map((image) => (
            <img
              key={image.id}
              className="w-full object-cover"
              style={{ height: image.id === 2 ? "109px" : "87px" }}
              alt={image.alt}
              src={image.src}
            />
          ))}
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
                <Select>
                  <SelectTrigger className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]">
                    <SelectValue
                      placeholder={field.label}
                      className="text-[#bbbbbb] font-medium"
                    />
                  </SelectTrigger>
                </Select>
              )}

              {field.type === "date" && (
                <div className="relative w-full">
                  <Input
                    className="h-12 px-4 py-2 rounded-lg border border-solid border-[#bbbbbb]"
                    placeholder={field.label}
                  />
                  <CalendarIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Radio Options */}
      <div className="mt-10">
        <RadioGroup defaultValue="new" className="flex gap-[53px]">
          <div className="flex items-center gap-1.5">
            <RadioGroupItem
              value="new"
              id="new"
              className="w-4 h-4 bg-[#2c97cd] rounded"
            />
            <Label
              htmlFor="new"
              className="font-medium text-foundationgreygrey-300 text-base"
            >
              New Entry
            </Label>
          </div>

          <div className="flex items-center gap-1.5">
            <RadioGroupItem
              value="style"
              id="style"
              className="w-4 h-4 rounded border border-solid border-black"
            />
            <Label
              htmlFor="style"
              className="font-medium text-foundationgreygrey-300 text-base"
            >
              Style Entry
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
};
