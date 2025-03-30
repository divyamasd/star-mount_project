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

export const PackingDetailsSection = (): JSX.Element => {
  // Product images data
  const productImages = [
    {
      src: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/image-1.png",
      alt: "Product main image",
      className: "w-[84px] h-[81px] object-cover",
    },
    {
      src: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/image-2.png",
      alt: "Product variant image",
      className: "w-full h-[109px] object-cover",
    },
    {
      src: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/image-3.png",
      alt: "Product accessories image",
      className: "w-full h-[87px] object-cover",
    },
  ];

  // Form fields data
  const formFields = [
    {
      label: "Style Number*",
      hasDropdown: true,
      icon: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/group-4313.png",
    },
    {
      label: "Order Number*",
      hasDropdown: true,
      icon: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/group-4313-1.png",
    },
    {
      label: "Deli. Date*",
      hasCalendar: true,
    },
    {
      label: "Order Qty.*",
      hasDropdown: false,
    },
    {
      label: "Order Excess Qty.*",
      hasDropdown: true,
      icon: "https://c.animaapp.com/m8vhfiyhwMjB4R/img/group-4313-2.png",
    },
  ];

  return (
    <Card className="w-full rounded-2xl border-[0.5px] border-solid border-[#bbbbbb] shadow-small-card-shadow1">
      <CardContent className="p-10">
        <div className="flex gap-14">
          {/* Product Images Gallery and Form Fields */}
          <div className="flex gap-14">
            {/* Product Images Gallery */}
            <div className="flex flex-col w-[88px] items-start gap-[19px]">
              <div className="relative w-[88px] h-[85px] bg-[#2c97cd]">
                <img
                  className={productImages[0].className}
                  alt={productImages[0].alt}
                  src={productImages[0].src}
                  style={{ margin: "2px" }}
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

            {/* Form Fields */}
            <div className="flex flex-col w-[354px] gap-[18px]">
              {formFields.map((field, index) => (
                <div key={index} className="w-full">
                  {field.hasDropdown ? (
                    <Select>
                      <SelectTrigger className="w-[354px] h-12 border border-solid border-[#bbbbbb] rounded-lg">
                        <div className="flex items-center justify-between w-full">
                          <SelectValue
                            placeholder={field.label}
                            className="font-medium text-foundationgreygrey-100 text-base"
                          />
                          {field.hasCalendar ? (
                            <CalendarIcon className="w-5 h-5" />
                          ) : null}
                        </div>
                      </SelectTrigger>
                    </Select>
                  ) : (
                    <Input
                      placeholder={field.label}
                      className="w-[354px] h-12 px-4 py-2 border border-solid border-[#bbbbbb] rounded-lg font-medium text-foundationgreygrey-100 text-base"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* T-shirt photo */}
          <div className="relative w-[435px] h-[363px]">
            <div className="relative w-full h-full bg-[url(https://c.animaapp.com/m8vhfiyhwMjB4R/img/image-4.png)] bg-cover bg-center">
              <div className="flex w-full items-center justify-between pt-8 px-4">
                <div className="inline-flex items-center justify-center gap-1 px-2 py-1 bg-foundation-successsuccess-50 rounded-3xl border-[0.5px] border-solid border-[#0ba700]">
                  <img
                    className="w-4 h-4"
                    alt="Discount shape"
                    src="https://c.animaapp.com/m8vhfiyhwMjB4R/img/discount-shape.svg"
                  />
                  <span className="font-mulish-12-sp-medium text-foundation-successsuccess-500">
                    2 Colour Added
                  </span>
                </div>
                <div className="w-8 h-8 bg-foundation-greygrey-100 rounded-full flex items-center justify-center">
                  <img
                    className="w-5 h-5"
                    alt="Delete"
                    src="https://c.animaapp.com/m8vhfiyhwMjB4R/img/mdi-delete.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox for Style/Ship Order */}
        <div className="flex items-center gap-1.5 mt-10">
          <div className="relative w-6 h-6">
            <Checkbox
              id="styleShipOrder"
              className="absolute w-4 h-4 top-1 left-1 bg-[#2c97cd] rounded"
            />
          </div>
          <label
            htmlFor="styleShipOrder"
            className="font-medium text-foundationgreygrey-300 text-base leading-[19.2px]"
          >
            Style /Ship Order
          </label>
        </div>
      </CardContent>
    </Card>
  );
};
