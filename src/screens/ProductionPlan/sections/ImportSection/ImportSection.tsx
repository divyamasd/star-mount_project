import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const ImportSection = (): JSX.Element => {
  // Data for tax info fields
  const taxInfoFields = [
    { id: 1, label: "Place of Supply" },
    { id: 2, label: "Invoice Type" },
    { id: 3, label: "Amount Are?" },
    { id: 4, label: "Reverse Charge" },
    { id: 5, label: "Income Tax TCS" },
    { id: 6, label: "GST TDS" },
    { id: 7, label: "GST TCS" },
  ];

  // Data for sales preference fields
  const salesPreferenceFields = [
    { id: 1, label: "Default Account" },
    { id: 2, label: "Cash Sale" },
    { id: 3, label: "Cash Sale Account" },
  ];

  // Data for price fields
  const priceFields = [
    { id: 1, label: "Price Group" },
    { id: 2, label: "Terms of payment" },
    { id: 3, label: "Discount scheme" },
  ];

  return (
    <Card className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-web-large-cards">
      <Accordion
        type="single"
        collapsible
        defaultValue="tax-info"
        className="w-full"
      >
        <AccordionItem value="tax-info" className="border-none">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Tax Info
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-6 gap-4 w-full">
                {taxInfoFields.slice(0, 6).map((field) => (
                  <div key={field.id} className="relative h-[49px]">
                    <Input
                      className="h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                      placeholder={field.label}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="relative w-[216px] h-[49px]">
                  <Input
                    className="h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={taxInfoFields[6].label}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        defaultValue="sales-preference"
        className="w-full"
      >
        <AccordionItem value="sales-preference" className="border-none">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Sales Preference
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex gap-4">
              {salesPreferenceFields.map((field) => (
                <div key={field.id} className="relative w-[216px] h-[49px]">
                  <Input
                    className="h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        defaultValue="price"
        className="w-full"
      >
        <AccordionItem value="price" className="border-none">
          <div className="flex items-center justify-between w-full">
            <AccordionTrigger className="p-0 hover:no-underline">
              <span className="font-mulish-18-sp-medium text-foundation-greygrey-500">
                Price
              </span>
            </AccordionTrigger>
          </div>
          <Separator className="my-4" />
          <AccordionContent>
            <div className="flex gap-4">
              {priceFields.map((field) => (
                <div key={field.id} className="relative w-[216px] h-[49px]">
                  <Input
                    className="h-10 mt-[9px] bg-hostbooksbackground rounded-lg border border-[#bbbbbb] font-mulish-14-sp-regular text-foundation-greygrey-400"
                    placeholder={field.label}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
